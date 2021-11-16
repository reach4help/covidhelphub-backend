import { OrganizationResolver } from "./entities/organization.entity";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { isProd } from "../utils/misc";
import { graphQlPort } from "../config";

interface GraphQLServerReturn {
  url: string;
  server: ApolloServer;
}

export const startGraphQLServer = async (): Promise<GraphQLServerReturn> => {
  const schema = await buildSchema({
    resolvers: [OrganizationResolver],
  });

  console.log(schema);

  // Create the GraphQL server
  const server = new ApolloServer({
    schema,
    introspection: !isProd() && true,
  });

  const { url } = await server.listen(graphQlPort);

  return { url, server };
};
