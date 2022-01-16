import dotenv from "dotenv";
dotenv.config();
// https://stackoverflow.com/a/53791071/13058340
import "reflect-metadata";
import { startGraphQLServer } from "./config/graphql";
import { initMongoDb } from "./config/mongodb";
// import { Organizations } from "./graphql/entities/organizations";

const init = async () => {
  try {
    await initMongoDb();
    const { url } = await startGraphQLServer();

    // TODO: Change this to a proper logger
    console.log(
      `GraphQL Server is running, GraphQL Playground available at ${url}`
    );
  }
  catch(error){
    console.error(error);
  }
};

init();
