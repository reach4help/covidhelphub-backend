import { OrganizationsResolver } from "./resolvers/organizations";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { isProd } from "../utils/misc";
import { graphQlPort } from "../config";
import { connect } from 'mongoose';
interface GraphQLServerReturn {
  url: string;
  server: ApolloServer;
}

export const startGraphQLServer = async (): Promise<GraphQLServerReturn> => {
  const schema = await buildSchema({
    resolvers: [
      OrganizationsResolver
    ],
    emitSchemaFile: true,
    validate: false,
  });

  const mongoose = await connect('mongodb://localhost:27017/test');
  await mongoose.connection;
  // Create the GraphQL server
  const server = new ApolloServer({
    schema,
    introspection: !isProd() && true,
  });

  const { url } = await server.listen(graphQlPort);

  return { url, server };
};
