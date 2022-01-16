import { createConnection, Connection } from "typeorm";

export const initMongoDb = async () => {
  const connection: Connection = await createConnection({
    type: "mongodb",
    host: "mongo", // Not localhost, because we're connecting within our docker network directly to the mongo service
    port: 27017,
    database: "admin",
    entities: [__dirname + "/../entities/organization.entity.ts"],
    username: "root",
    password: "example",
    useUnifiedTopology: true,
  });

  return connection;
};