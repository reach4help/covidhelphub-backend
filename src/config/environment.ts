import * as env from "env-var";

// DATABASE ENVS
export const environment = env.get("NODE_ENV").required().asString();

// GRAPHQL ENVS
export const graphQlPort = env.get("PORT").required().asString();

// POSTGRES ENVS
export const postgresUser = env.get("POSTGRES_USER").required().asString();
export const postgresPassword = env
  .get("POSTGRES_PASSWORD")
  .required()
  .asString();
export const postgresDbName = env.get("POSTGRES_DB").required().asString();
