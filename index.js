import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import allTypeDefs from "./schemas/index.schema.js";
import allResolvers from "./resolvers/index.resolver.js";
import context from "./context/context.js";

dotenv.config();

// merging the typeDefs and resolvers
const server = new ApolloServer({
  typeDefs: allTypeDefs,
  resolvers: allResolvers,
  includeStacktraceInErrorResponses: false,
  introspection: true,
});

const mongoDB = process.env.MONGODB_URL;

mongoose
  .connect(mongoDB)
  .then(() => {
    console.log("Connected to MongoDB");
    return startStandaloneServer(server, {
      listen: { port: process.env.PORT },
      context: context,
    });
  })
  .then((server) => {
    console.log(`🚀 Server ready at: ${server.url}`);
  });
