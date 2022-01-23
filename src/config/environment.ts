import * as env from "env-var";

// DATABASE ENVS
export const environment = env.get("NODE_ENV").required().asString();

// GRAPHQL ENVS
export const graphQlPort = env.get("GRAPHQL_PORT").required().asString();
