"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const fs = __importStar(require("fs"));
if (fs.existsSync(".env")) {
    dotenv.config({ path: ".env" });
}
else {
    dotenv.config({ path: ".env.example" }); // you can delete this after you create your own .env file!
}
exports.ENVIRONMENT = process.env.NODE_ENV;
const prod = exports.ENVIRONMENT === "production"; // Anything else is treated as 'dev'
exports.MONGODB_URI = prod
    ? process.env.MONGODB_URI
    : process.env.MONGODB_URI_LOCAL;
exports.API_PORT = prod
    ? process.env.API_PORT
    : process.env.API_PORT_LOCAL;
//# sourceMappingURL=secrets.js.map