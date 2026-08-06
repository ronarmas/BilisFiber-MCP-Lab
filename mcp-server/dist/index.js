import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerCustomerTools } from "./tools/customer.tool.js";
const server = new McpServer({
    name: "Bilis Fiber MCP Server",
    version: "1.0.0",
});
registerCustomerTools(server);
const transport = new StdioServerTransport();
await server.connect(transport);
console.error("Bilis Fiber MCP Server running");
