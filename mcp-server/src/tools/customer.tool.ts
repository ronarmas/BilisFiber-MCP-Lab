import { z } from "zod";
import { getCustomer } from "../api.js";


export function registerCustomerTools(server: any) {

  server.registerTool(

    "find_customer",

    {
      title: "Find Customer",

      description:
        "Find customer information using account number",

      inputSchema: {

        accountNumber:
          z.coerce.string()
            .min(1, "Account number is required"),

      },

    },

async ({
  accountNumber,
}: {
  accountNumber: string;
}) => {

    
      console.log(
        "Finding customer:",
        accountNumber,
        "Type:",
        typeof accountNumber,
      );


      const cleanAccountNumber =
        accountNumber.trim();


      try {

        const customer =
          await getCustomer(
            cleanAccountNumber,
          );


        console.log(
          "Customer result:",
          customer,
        );


        if (!customer) {

          return {

            content: [

              {
                type: "text",

                text:
                  `No customer found for account number ${cleanAccountNumber}`,

              },

            ],

          };

        }


        return {

          content: [

            {

              type: "text",

              text:
                JSON.stringify(
                  customer,
                  null,
                  2,
                ),

            },

          ],

        };


      } catch (error) {

        console.error(
          "Customer lookup error:",
          error,
        );


        return {

          content: [

            {

              type: "text",

              text:
                `Failed to find customer: ${
                  error instanceof Error
                    ? error.message
                    : "Unknown error"
                }`,

            },

          ],

        };

      }

    },

  );

}