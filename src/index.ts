// https://stackoverflow.com/a/53791071/13058340
import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();
// import { initMongoDb } from "./config/mongodb";
import { initPostgres } from "./config/postgres";
import { startGraphQLServer } from "./config/graphql";
import { Organization } from "./entities/organization.entity";

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const init = async () => {
  try {
    const connection = await initPostgres();

    console.log("Connected to Postgres");
    console.log("Creating test data");

    const orgRepo =  connection.getRepository(Organization);
 
    let org = new Organization();
    org.org_name = "reach4help";
    await orgRepo.save(org);
    // await orgRepo.createQueryBuilder()
    //   .insert()
    //   .into(Organization)
    //   .values([{id: 1, org_name: 'reach4help'}])
    //   .execute();

    console.log("Created test data");

    console.log("Using Prisma to fetch the results");
    const data = await prisma.organization.findMany();
    console.log(data);

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
