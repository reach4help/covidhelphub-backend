import { createConnection, Connection } from "typeorm";
import { postgresPassword, postgresUser, postgresDbName } from "./environment";

export const initPostgres = async () => {
  const connection: Connection = await createConnection({
    type: "postgres",
    host: "postgres", // Not localhost, because we're connecting within our docker network directly to the mongo service
    port: 5432,
    database: postgresDbName,
    entities: [__dirname + "/../entities/*.ts"],
    username: postgresUser,
    password: postgresPassword,
    synchronize: false // This will need to be turned off in production in favor of an actual structure.sql script
  });

  return connection;
};