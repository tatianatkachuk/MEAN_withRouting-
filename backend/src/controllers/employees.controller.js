"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEmployee = exports.deleteEmployee = exports.getEmployee = exports.createEmployee = exports.getEmployees = void 0;
// Models
const Employee_1 = __importDefault(require("../models/Employee"));
async function getEmployees(req, res) {
    const employees = await Employee_1.default.find();
    return res.json(employees);
}
exports.getEmployees = getEmployees;
;
async function createEmployee(req, res) {
    const { name, position, office, salary } = req.body;
    const newEmployee = { name, position, office, salary };
    const employee = new Employee_1.default(newEmployee);
    await employee.save();
    return res.json({
        message: 'Employee Saved Successfully',
        employee
    });
}
exports.createEmployee = createEmployee;
;
async function getEmployee(req, res) {
    const { id } = req.params;
    const employee = await Employee_1.default.findById(id);
    return res.json(employee);
}
exports.getEmployee = getEmployee;
async function deleteEmployee(req, res) {
    const { id } = req.params;
    const employee = await Employee_1.default.findByIdAndRemove(id);
    return res.json({ message: 'Employee Deleted' });
}
exports.deleteEmployee = deleteEmployee;
;
async function updateEmployee(req, res) {
    const { id } = req.params;
    const { name, position, salary, office } = req.body;
    const updatedEmployee = await Employee_1.default.findByIdAndUpdate(id, {
        name,
        position,
        salary,
        office
    });
    return res.json({
        message: 'Successfully updated',
        updatedEmployee
    });
}
exports.updateEmployee = updateEmployee;
