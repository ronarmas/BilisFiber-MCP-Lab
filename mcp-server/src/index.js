"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
var stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
var customer_tool_js_1 = require("./tools/customer.tool.js");
var server = new mcp_js_1.McpServer({
    name: "Bilis Fiber MCP Server",
    version: "1.0.0",
});
(0, customer_tool_js_1.registerCustomerTools)(server);
var transport = new stdio_js_1.StdioServerTransport();
await server.connect(transport);
console.error("Bilis Fiber MCP Server running");
