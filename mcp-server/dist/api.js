//const API_URL = "http://localhost:3000";
const API_URL = process.env.API_URL ?? "http://localhost:3000";
// =====================================================
// Customers
// =====================================================
export async function getCustomer(accountNumber) {
    const response = await fetch(`${API_URL}/customers/${accountNumber}`);
    if (!response.ok) {
        throw new Error(`Customer not found: ${accountNumber}`);
    }
    return response.json();
}
// =====================================================
// Tickets
// =====================================================
export async function getTicketsByAccount(accountNumber) {
    const response = await fetch(`${API_URL}/tickets/customer/${accountNumber}`);
    if (!response.ok) {
        throw new Error(`Unable to retrieve tickets for account ${accountNumber}`);
    }
    return response.json();
}
export async function getTicketById(ticketId) {
    const response = await fetch(`${API_URL}/tickets/${ticketId}`);
    if (!response.ok) {
        throw new Error(`Ticket ${ticketId} not found.`);
    }
    return response.json();
}
export async function createTicket(body) {
    const response = await fetch(`${API_URL}/tickets`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    if (!response.ok) {
        throw new Error("Unable to create ticket.");
    }
    return response.json();
}
// =====================================================
// Diagnostics
// =====================================================
export async function getDiagnostics(serviceId) {
    const response = await fetch(`${API_URL}/diagnostics/${serviceId}`);
    if (!response.ok) {
        throw new Error(`Diagnostics not found for ${serviceId}`);
    }
    return response.json();
}
export async function rebootDevice(serviceId) {
    const response = await fetch(`${API_URL}/diagnostics/${serviceId}/reboot`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
    });
    if (!response.ok) {
        throw new Error(`Unable to reboot device ${serviceId}`);
    }
    return response.json();
}
export async function refreshDiagnostics(serviceId) {
    const response = await fetch(`${API_URL}/diagnostics/${serviceId}/refresh`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
    });
    if (!response.ok) {
        throw new Error(`Unable to refresh diagnostics for ${serviceId}`);
    }
    return response.json();
}
// =====================================================
// Outages
// =====================================================
export async function checkOutage(area) {
    const response = await fetch(`${API_URL}/outages/check`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            area,
        }),
    });
    if (!response.ok) {
        throw new Error(`Unable to check outage for area ${area}`);
    }
    return response.json();
}
// =====================================================
// Appointments
// =====================================================
export async function getAppointmentsByAccount(accountNumber) {
    const response = await fetch(`${API_URL}/appointments/account/${accountNumber}`);
    if (!response.ok) {
        throw new Error(`Unable to retrieve appointments for account ${accountNumber}`);
    }
    return response.json();
}
export async function getAppointmentById(appointmentId) {
    const response = await fetch(`${API_URL}/appointments/${appointmentId}`);
    if (!response.ok) {
        throw new Error(`Unable to retrieve appointment ${appointmentId}`);
    }
    return response.json();
}
export async function createAppointment(body) {
    const response = await fetch(`${API_URL}/appointments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    if (!response.ok) {
        throw new Error("Unable to create appointment.");
    }
    return response.json();
}
export async function updateAppointmentStatus(appointmentId, status) {
    const response = await fetch(`${API_URL}/appointments/${appointmentId}/status`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            status,
        }),
    });
    if (!response.ok) {
        throw new Error(`Unable to update appointment ${appointmentId}`);
    }
    return response.json();
}
