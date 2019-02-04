"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const matchSchema = new Schema({
    away_result: Number,
    away_team: Number,
    date: Date,
    finished: Boolean,
    home_result: Number,
    home_team: Number,
    matchday: Number,
    name: Number,
    stadium: Number,
    type: String,
});
const groupSchema = new Schema({
    id: Number,
    matches: [matchSchema],
    name: String,
    runnerUp: String,
    winner: String,
});
const Group = mongoose_1.default.model("Group", groupSchema);
exports.default = Group;
//# sourceMappingURL=group.js.map