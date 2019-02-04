"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const teamSchema = new Schema({
    emoji: String,
    fifaCode: String,
    flag: String,
    id: Number,
    iso2: String,
    name: String,
});
const Team = mongoose_1.default.model("Team", teamSchema);
exports.default = Team;
//# sourceMappingURL=team.js.map