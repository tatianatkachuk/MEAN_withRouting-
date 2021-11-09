"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConnection = void 0;
const mongoose_1 = require("mongoose");
const MONGODB_URI = 'mongodb+srv://telematica:telematica@cluster0.twlws.mongodb.net/employeesdb?retryWrites=true&w=majority';
async function startConnection() {
    const db = await (0, mongoose_1.connect)(MONGODB_URI, {
    //useUnifiedTopology: true,
    //useNewUrlParser: true,
    //useFindAndModify: false 
    });
    console.log('Database is connected');
}
exports.startConnection = startConnection;
