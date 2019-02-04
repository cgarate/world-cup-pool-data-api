"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
const express_graphql_1 = __importDefault(require("express-graphql"));
const mongoose_1 = __importDefault(require("mongoose"));
const schema_1 = require("./schema/schema");
const secrets_1 = require("./util/secrets");
dotenv.config({ path: ".env.example" });
const app = express_1.default();
app.set("port", secrets_1.API_PORT || 4000);
// Allow cross-domain requests
app.use(cors_1.default());
// Connect to mongoDB
mongoose_1.default.connect(secrets_1.MONGODB_URI);
mongoose_1.default.connection.once("open", () => {
    /* tslint:disable:no-console */
    console.log("Connected to Database");
});
app.use("/graphql", express_graphql_1.default({
    graphiql: true,
    schema: schema_1.graphQLSchema,
}));
exports.default = app;
//# sourceMappingURL=app.js.map