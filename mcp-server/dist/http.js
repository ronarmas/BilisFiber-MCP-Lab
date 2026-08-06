import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { createMcpExpressApp } from "@modelcontextprotocol/sdk/server/express.js";
import { isInitializeRequest } from "@modelcontextprotocol/sdk/types.js";
import { randomUUID } from "node:crypto";
import { registerCustomerTools } from "./tools/customer.tool.js";
import { registerTicketTools } from "./tools/tickets.tool.js";
import { registerDiagnosticsTools } from "./tools/diagnostics.tool.js";
import { registerOutageTools } from "./tools/outages.tool.js";
import { registerAppointmentTools } from "./tools/appointments.tool.js";
const app = createMcpExpressApp({
    host: "0.0.0.0",
    allowedHosts: [
        "localhost",
        "127.0.0.1",
        "uniformed-recycler-strode.ngrok-free.dev",
    ],
});
const PORT = 3001;
app.get("/", (_req, res) => {
    res.json({
        name: "Bilis Fiber MCP Server",
        status: "running",
        transport: "streamable-http",
    });
});
function createServer() {
    const server = new McpServer({
        name: "Bilis Fiber MCP Server",
        version: "1.0.0",
    });
    registerCustomerTools(server);
    registerTicketTools(server);
    registerDiagnosticsTools(server);
    registerOutageTools(server);
    registerAppointmentTools(server);
    return server;
}
const transports = {};
app.post("/mcp", async (req, res) => {
    try {
        console.log("MCP request headers:", req.headers);
        console.log("Current sessions:", Object.keys(transports));
        let transport;
        const sessionId = req.headers["mcp-session-id"];
        // Existing MCP session
        if (sessionId && transports[sessionId]) {
            transport = transports[sessionId];
        }
        // New MCP session initialization
        else if (!sessionId && isInitializeRequest(req.body)) {
            transport = new StreamableHTTPServerTransport({
                sessionIdGenerator: () => randomUUID(),
            });
            transport.onclose = () => {
                if (transport.sessionId) {
                    delete transports[transport.sessionId];
                    console.log("Removed session:", transport.sessionId);
                }
            };
            const server = createServer();
            await server.connect(transport);
        }
        else {
            res.status(400).json({
                jsonrpc: "2.0",
                error: {
                    code: -32000,
                    message: "Invalid session",
                },
                id: null,
            });
            return;
        }
        await transport.handleRequest(req, res, req.body);
        // Save session after MCP response generated
        if (transport.sessionId &&
            !transports[transport.sessionId]) {
            transports[transport.sessionId] = transport;
            console.log("Saved session:", transport.sessionId);
        }
        console.log("Active sessions:", Object.keys(transports));
    }
    catch (error) {
        console.error("MCP Error:", error);
        if (!res.headersSent) {
            res.status(500).json({
                jsonrpc: "2.0",
                error: {
                    code: -32603,
                    message: "Internal Server Error",
                },
                id: null,
            });
        }
    }
});
app.listen(PORT, () => {
    console.log(`HTTP MCP Server listening on http://localhost:${PORT}`);
});
