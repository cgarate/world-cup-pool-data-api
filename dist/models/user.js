"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const userSchema = new Schema({
    email: String,
    name: String,
    type: String,
    username: String,
});
const User = mongoose_1.default.model("Team", userSchema);
exports.default = User;
//# sourceMappingURL=user.js.map