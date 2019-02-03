import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import graphqlHTTP from "express-graphql";
import mongoose from "mongoose";

import { API_PORT, MONGODB_URI  } from "./src/util/secrets";

dotenv.config({ path: ".env.example" });

const app = express();

// Allow cross-domain requests
app.use(cors());

// Connect to mongoDB
mongoose.connect(MONGODB_URI);
mongoose.connection.once("open", () => {
  /* tslint:disable:no-console */
  console.log("Connected to Database");
});

app.use("/graphql", graphqlHTTP({
  graphiql: true,
  schema,
}));

app.listen(API_PORT, () => {
  /* tslint:disable:no-console */
  console.log(`Listening on port ${API_PORT}`);
});
