"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//lógica del servidor
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const employees_routes_1 = __importDefault(require("./routes/employees.routes"));
const cors_1 = __importDefault(require("cors"));
// Initializations
const app = (0, express_1.default)();
// Middlewares
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Routes
app.use('/api', employees_routes_1.default);
exports.default = app;
