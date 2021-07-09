const { ApolloServer, makeExecutableSchema } = require("apollo-server");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const { connect } = require("./db");

let server;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const config = { schema };

const createApolloServer = () => {
  if (!server) {
    try {
      console.log("Creating a new Apollo Server instance");
      server = new ApolloServer(config);
    } catch (error) {
      console.error(
        "Failed to create a new Apollo Server instance",
        error.stack
      );
    }

    return server;
  }

  console.log("Using the existing Apollo Server instance");
  return server;
};

createApolloServer()
  .listen()
  .then(async ({ url }) => {
    await connect();
    console.log(`🚀  Server ready at ${url}`);
  })
  .catch((error) => {
    console.log(`💥  Error: ${error.message}`);
  });
