import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import { checkOutage } from "../api.js";

export function registerOutageTools(
  server: McpServer,
) {

  server.tool(
    "check_outage",
    "Check whether there is a reported network outage in a customer's area.",
    {
      area: z.string().describe(
        "Customer service area or location",
      ),
    },

    async ({ area }) => {

      const outage =
        await checkOutage(area);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              outage,
              null,
              2,
            ),
          },
        ],
      };

    },
  );

}