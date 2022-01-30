// https://stackoverflow.com/a/53791071/13058340
import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();
// import { initMongoDb } from "./config/mongodb";
import { initPostgres } from "./config/postgres";
import { startGraphQLServer } from "./config/graphql";
// import { getManager } from "typeorm";
import { Organization } from "./entities/organization.entity";

const init = async () => {
  try {
    const connection = await initPostgres();

    console.log("Connected to Postgres");
    console.log("Creating test data");

    const r4hOrg = connection.manager.create(Organization, {
      id: 1,
      name: "reach4help",
    });
    await connection.manager.save(r4hOrg);

    console.log("Created test data");
    console.log("Starting GraphQL Server");

    const { url } = await startGraphQLServer();

    // TODO: Change this to a proper logger
    console.log(
      `GraphQL Server is running, GraphQL Playground available at ${url}`
    );
  } catch (error) {
    console.error(error);
  }
};

init();
