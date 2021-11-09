"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: String,
    difficulty: String,
    deadline: String
}, {
    timestamps: true,
    versionKey: false
});
exports.default = (0, mongoose_1.model)('Task', schema);
