"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
var streamableHttp_js_1 = require("@modelcontextprotocol/sdk/server/streamableHttp.js");
var express_js_1 = require("@modelcontextprotocol/sdk/server/express.js");
var types_js_1 = require("@modelcontextprotocol/sdk/types.js");
var node_crypto_1 = require("node:crypto");
var customer_tool_js_1 = require("./tools/customer.tool.js");
var tickets_tool_js_1 = require("./tools/tickets.tool.js");
var diagnostics_tool_js_1 = require("./tools/diagnostics.tool.js");
var outages_tool_js_1 = require("./tools/outages.tool.js");
var appointments_tool_js_1 = require("./tools/appointments.tool.js");
var app = (0, express_js_1.createMcpExpressApp)({
    host: "0.0.0.0",
    allowedHosts: [
        "localhost",
        "127.0.0.1",
        "uniformed-recycler-strode.ngrok-free.dev",
    ],
});
var PORT = 3001;
app.get("/", function (_req, res) {
    res.json({
        name: "Bilis Fiber MCP Server",
        status: "running",
        transport: "streamable-http",
    });
});
function createServer() {
    var server = new mcp_js_1.McpServer({
        name: "Bilis Fiber MCP Server",
        version: "1.0.0",
    });
    (0, customer_tool_js_1.registerCustomerTools)(server);
    (0, tickets_tool_js_1.registerTicketTools)(server);
    (0, diagnostics_tool_js_1.registerDiagnosticsTools)(server);
    (0, outages_tool_js_1.registerOutageTools)(server);
    (0, appointments_tool_js_1.registerAppointmentTools)(server);
    return server;
}
var transports = {};
app.post("/mcp", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var transport_1, sessionId, server, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                console.log("MCP request headers:", req.headers);
                console.log("Current sessions:", Object.keys(transports));
                sessionId = req.headers["mcp-session-id"];
                if (!(sessionId && transports[sessionId])) return [3 /*break*/, 1];
                transport_1 = transports[sessionId];
                return [3 /*break*/, 4];
            case 1:
                if (!(!sessionId && (0, types_js_1.isInitializeRequest)(req.body))) return [3 /*break*/, 3];
                transport_1 = new streamableHttp_js_1.StreamableHTTPServerTransport({
                    sessionIdGenerator: function () { return (0, node_crypto_1.randomUUID)(); },
                });
                transport_1.onclose = function () {
                    if (transport_1.sessionId) {
                        delete transports[transport_1.sessionId];
                        console.log("Removed session:", transport_1.sessionId);
                    }
                };
                server = createServer();
                return [4 /*yield*/, server.connect(transport_1)];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                res.status(400).json({
                    jsonrpc: "2.0",
                    error: {
                        code: -32000,
                        message: "Invalid session",
                    },
                    id: null,
                });
                return [2 /*return*/];
            case 4: return [4 /*yield*/, transport_1.handleRequest(req, res, req.body)];
            case 5:
                _a.sent();
                // Save session after MCP response generated
                if (transport_1.sessionId &&
                    !transports[transport_1.sessionId]) {
                    transports[transport_1.sessionId] = transport_1;
                    console.log("Saved session:", transport_1.sessionId);
                }
                console.log("Active sessions:", Object.keys(transports));
                return [3 /*break*/, 7];
            case 6:
                error_1 = _a.sent();
                console.error("MCP Error:", error_1);
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
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
app.listen(PORT, function () {
    console.log("HTTP MCP Server listening on http://localhost:".concat(PORT));
});
