import dotenv from "dotenv";
dotenv.config();
// https://stackoverflow.com/a/53791071/13058340
import "reflect-metadata";
import { initMongoDb } from "./config/mongodb";
import { startGraphQLServer } from "./config/graphql";
import { getManager } from "typeorm";
import { Organization } from "./entities/organization.entity";

const init = async () => {
  try {
    await initMongoDb();

    console.log("Connected to MongoDB");
    console.log("Creating test data");
    const manager = getManager();
    const r4hOrg = manager.create(Organization, { id: 1, name: "reach4help" });
    await manager.save(r4hOrg);

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
