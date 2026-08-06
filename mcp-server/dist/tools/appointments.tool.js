import { z } from "zod";
import { getAppointmentsByAccount, getAppointmentById, createAppointment, updateAppointmentStatus, } from "../api.js";
export function registerAppointmentTools(server) {
    // =====================================================
    // Get Appointments by Account
    // =====================================================
    server.tool("get_appointments_by_account", "Retrieve all appointments for a customer account.", {
        accountNumber: z.string().describe("Customer account number"),
    }, async ({ accountNumber }) => {
        const appointments = await getAppointmentsByAccount(accountNumber);
        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(appointments, null, 2),
                },
            ],
        };
    });
    // =====================================================
    // Get Appointment by ID
    // =====================================================
    server.tool("get_appointment_by_id", "Retrieve appointment details using the appointment ID.", {
        appointmentId: z.string().describe("Appointment ID"),
    }, async ({ appointmentId }) => {
        const appointment = await getAppointmentById(appointmentId);
        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(appointment, null, 2),
                },
            ],
        };
    });
    // =====================================================
    // Create Appointment
    // =====================================================
    server.tool("create_appointment", "Create a technician appointment for a customer.", {
        accountNumber: z.string(),
        ticketId: z.string(),
        technician: z.string(),
        visitDate: z.string(),
        timeSlot: z.string(),
    }, async (args) => {
        const result = await createAppointment(args);
        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(result, null, 2),
                },
            ],
        };
    });
    // =====================================================
    // Update Appointment Status
    // =====================================================
    server.tool("update_appointment_status", "Update the status of an existing appointment.", {
        appointmentId: z.string(),
        status: z.string().describe("Scheduled, In Progress, Completed, Cancelled"),
    }, async ({ appointmentId, status, }) => {
        const result = await updateAppointmentStatus(appointmentId, status);
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
