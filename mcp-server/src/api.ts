//const API_URL = "http://localhost:3000";
const API_URL =
  process.env.API_URL ?? "http://localhost:3000";
// =====================================================
// Customers
// =====================================================

export async function getCustomer(
  accountNumber: string,
) {
  const response = await fetch(
    `${API_URL}/customers/${accountNumber}`,
  );

  if (!response.ok) {
    throw new Error(
      `Customer not found: ${accountNumber}`,
    );
  }

  return response.json();
}

// =====================================================
// Tickets
// =====================================================

export async function getTicketsByAccount(
  accountNumber: string,
) {
  const response = await fetch(
    `${API_URL}/tickets/customer/${accountNumber}`,
  );

  if (!response.ok) {
    throw new Error(
      `Unable to retrieve tickets for account ${accountNumber}`,
    );
  }

  return response.json();
}

export async function getTicketById(
  ticketId: string,
) {
  const response = await fetch(
    `${API_URL}/tickets/${ticketId}`,
  );

  if (!response.ok) {
    throw new Error(
      `Ticket ${ticketId} not found.`,
    );
  }

  return response.json();
}

export async function createTicket(
  body: {
    accountNumber: string;
    issue: string;
  },
) {
  const response = await fetch(
    `${API_URL}/tickets`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  );

  if (!response.ok) {
    throw new Error(
      "Unable to create ticket.",
    );
  }

  return response.json();
}

// =====================================================
// Diagnostics
// =====================================================

export async function getDiagnostics(
  serviceId: string,
) {
  const response = await fetch(
    `${API_URL}/diagnostics/${serviceId}`,
  );

  if (!response.ok) {
    throw new Error(
      `Diagnostics not found for ${serviceId}`,
    );
  }

  return response.json();
}

export async function rebootDevice(
  serviceId: string,
) {
  const response = await fetch(
    `${API_URL}/diagnostics/${serviceId}/reboot`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    },
  );

  if (!response.ok) {
    throw new Error(
      `Unable to reboot device ${serviceId}`,
    );
  }

  return response.json();
}

// =====================================================
// Outages
// =====================================================

export async function checkOutage(
  area: string,
) {
  const response = await fetch(
    `${API_URL}/outages/check`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        area,
      }),
    },
  );

  if (!response.ok) {
    throw new Error(
      `Unable to check outage for area ${area}`,
    );
  }

  return response.json();
}
// =====================================================
// Appointments
// =====================================================

export async function getAppointmentsByAccount(
  accountNumber: string,
) {
  const response = await fetch(
    `${API_URL}/appointments/account/${accountNumber}`,
  );

  if (!response.ok) {
    throw new Error(
      `Unable to retrieve appointments for account ${accountNumber}`,
    );
  }

  return response.json();
}

export async function getAppointmentById(
  appointmentId: string,
) {
  const response = await fetch(
    `${API_URL}/appointments/${appointmentId}`,
  );

  if (!response.ok) {
    throw new Error(
      `Unable to retrieve appointment ${appointmentId}`,
    );
  }

  return response.json();
}

export async function createAppointment(body: {
  accountNumber: string;
  ticketId: string;
  technician: string;
  visitDate: string;
  timeSlot: string;
}) {
  const response = await fetch(
    `${API_URL}/appointments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  );

  if (!response.ok) {
    throw new Error("Unable to create appointment.");
  }

  return response.json();
}

export async function updateAppointmentStatus(
  appointmentId: string,
  status: string,
) {
  const response = await fetch(
    `${API_URL}/appointments/${appointmentId}/status`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status,
      }),
    },
  );

  if (!response.ok) {
    throw new Error(
      `Unable to update appointment ${appointmentId}`,
    );
  }

  return response.json();
}
