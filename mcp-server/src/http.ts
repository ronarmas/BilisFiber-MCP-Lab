import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { createMcpExpressApp } from "@modelcontextprotocol/sdk/server/express.js";
import { isInitializeRequest } from "@modelcontextprotocol/sdk/types.js";
import { randomUUID } from "node:crypto";
import type { Request, Response } from "express";

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
    "bilisfiber-mcp.onrender.com",
  ],
});

// Render provides the PORT environment variable
const PORT = Number(process.env.PORT) || 3001;

app.get("/", (_req: Request, res: Response) => {
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

const transports: Record<string, StreamableHTTPServerTransport> = {};

app.post(
  "/mcp",
  async (req: Request, res: Response) => {
    try {
      console.log("MCP request headers:", req.headers);
      console.log("Current sessions:", Object.keys(transports));

      let transport: StreamableHTTPServerTransport;

      const sessionId =
        req.headers["mcp-session-id"] as string | undefined;

      // Existing MCP Session
      if (sessionId && transports[sessionId]) {
        transport = transports[sessionId];
      }

      // New MCP Session
      else if (!sessionId && isInitializeRequest(req.body)) {
        transport = new StreamableHTTPServerTransport({
          sessionIdGenerator: () => randomUUID(),
        });

        transport.onclose = () => {
          if (transport.sessionId) {
            delete transports[transport.sessionId];

            console.log(
              "Removed session:",
              transport.sessionId,
            );
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

      await transport.handleRequest(
        req,
        res,
        req.body,
      );

      // Save transport after initialization
      if (
        transport.sessionId &&
        !transports[transport.sessionId]
      ) {
        transports[transport.sessionId] = transport;

        console.log(
          "Saved session:",
          transport.sessionId,
        );
      }

      console.log(
        "Active sessions:",
        Object.keys(transports),
      );

    } catch (error) {

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
  },
);

app.listen(PORT, () => {
  console.log("==================================");
  console.log("🚀 Bilis Fiber MCP Server Started");
  console.log(`🌐 Listening on port ${PORT}`);
  console.log(`📡 MCP Endpoint: /mcp`);
  console.log("==================================");
});