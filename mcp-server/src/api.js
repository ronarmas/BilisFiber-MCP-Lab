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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomer = getCustomer;
exports.getTicketsByAccount = getTicketsByAccount;
exports.getTicketById = getTicketById;
exports.createTicket = createTicket;
exports.getDiagnostics = getDiagnostics;
exports.rebootDevice = rebootDevice;
exports.checkOutage = checkOutage;
exports.getAppointmentsByAccount = getAppointmentsByAccount;
exports.getAppointmentById = getAppointmentById;
exports.createAppointment = createAppointment;
exports.updateAppointmentStatus = updateAppointmentStatus;
//const API_URL = "http://localhost:3000";
var API_URL = (_a = process.env.API_URL) !== null && _a !== void 0 ? _a : "http://localhost:3000";
// =====================================================
// Customers
// =====================================================
function getCustomer(accountNumber) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(API_URL, "/customers/").concat(accountNumber))];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Customer not found: ".concat(accountNumber));
                    }
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
// =====================================================
// Tickets
// =====================================================
function getTicketsByAccount(accountNumber) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(API_URL, "/tickets/customer/").concat(accountNumber))];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Unable to retrieve tickets for account ".concat(accountNumber));
                    }
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
function getTicketById(ticketId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(API_URL, "/tickets/").concat(ticketId))];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Ticket ".concat(ticketId, " not found."));
                    }
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
function createTicket(body) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(API_URL, "/tickets"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(body),
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Unable to create ticket.");
                    }
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
// =====================================================
// Diagnostics
// =====================================================
function getDiagnostics(serviceId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(API_URL, "/diagnostics/").concat(serviceId))];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Diagnostics not found for ".concat(serviceId));
                    }
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
function rebootDevice(serviceId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(API_URL, "/diagnostics/").concat(serviceId, "/reboot"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({}),
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Unable to reboot device ".concat(serviceId));
                    }
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
// =====================================================
// Outages
// =====================================================
function checkOutage(area) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(API_URL, "/outages/check"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            area: area,
                        }),
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Unable to check outage for area ".concat(area));
                    }
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
// =====================================================
// Appointments
// =====================================================
function getAppointmentsByAccount(accountNumber) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(API_URL, "/appointments/account/").concat(accountNumber))];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Unable to retrieve appointments for account ".concat(accountNumber));
                    }
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
function getAppointmentById(appointmentId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(API_URL, "/appointments/").concat(appointmentId))];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Unable to retrieve appointment ".concat(appointmentId));
                    }
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
function createAppointment(body) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(API_URL, "/appointments"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(body),
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Unable to create appointment.");
                    }
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
function updateAppointmentStatus(appointmentId, status) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(API_URL, "/appointments/").concat(appointmentId, "/status"), {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            status: status,
                        }),
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Unable to update appointment ".concat(appointmentId));
                    }
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
