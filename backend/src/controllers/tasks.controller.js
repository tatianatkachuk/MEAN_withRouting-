"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = exports.getTasks = void 0;
// Models
const Task_1 = __importDefault(require("../models/Task"));
async function getTasks(req, res) {
    const tasks = await Task_1.default.find();
    return res.json(tasks);
}
exports.getTasks = getTasks;
;
async function createTask(req, res) {
    const { name, difficulty, deadline } = req.body;
    const newTask = { name, difficulty, deadline };
    const task = new Task_1.default(newTask);
    await task.save();
    return res.json({
        message: 'Task Saved Successfully',
        task
    });
}
exports.createTask = createTask;
;
/* export async function getEmployee(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    return res.json(employee);
}

export async function deleteEmployee(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const employee = await Employee.findByIdAndRemove(id) as IEmployee;
    return res.json({ message: 'Employee Deleted' });
};


export async function updateEmployee(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, position, salary, office } = req.body;
    const updatedEmployee = await Employee.findByIdAndUpdate(id, {
        name,
        position,
        salary,
        office
    });
    return res.json({
        message: 'Successfully updated',
        updatedEmployee
    });
} */ 
