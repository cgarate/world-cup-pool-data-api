import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import graphqlHTTP from "express-graphql";
import mongoose from "mongoose";

import { graphQLSchema } from "./schema/schema";
import { API_PORT, MONGODB_URI } from "./util/secrets";

dotenv.config({ path: ".env.example" });

const app = express();

app.set("port", API_PORT || 4000);

// Allow cross-domain requests
app.use(cors());

// Connect to mongoDB
mongoose.connect(MONGODB_URI);
mongoose.connection.once("open", () => {
  /* tslint:disable:no-console */
  console.log("Connected to Database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: graphQLSchema,
  }),
);

export default app;
