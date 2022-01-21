const express = require("express");
const { ApolloServer } = require("apollo-server-express");

// Load schemas and resolvers
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(
    `Server is listening at http://localhost:4000${server.graphqlPath}`
  );
});
