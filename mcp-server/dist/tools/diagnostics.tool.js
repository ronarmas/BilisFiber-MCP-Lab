import { z } from "zod";
import { getDiagnostics, rebootDevice, } from "../api.js";
export function registerDiagnosticsTools(server) {
    // =====================================================
    // Get Diagnostics
    // =====================================================
    server.tool("get_diagnostics", "Retrieve diagnostics information for a customer's ONT/router using the service ID.", {
        serviceId: z.string().describe("Customer service ID"),
    }, async ({ serviceId }) => {
        const diagnostics = await getDiagnostics(serviceId);
        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(diagnostics, null, 2),
                },
            ],
        };
    });
    // =====================================================
    // Reboot Device
    // =====================================================
    server.tool("reboot_device", "Remotely reboot the customer's ONT/router. This should only be used after the customer confirms.", {
        serviceId: z.string().describe("Customer service ID"),
    }, async ({ serviceId }) => {
        const result = await rebootDevice(serviceId);
        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(result, null, 2),
                },
            ],
        };
    });
}
