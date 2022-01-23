import {
  Args,
  ArgsType,
  Field,
  ID,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";

import { Entity, ObjectIdColumn, Column, getManager } from "typeorm";

@ArgsType()
class OrganizationArgs {
  @Field(() => String, { nullable: true })
  name?: "";
}

@ObjectType()
@Entity()
export class Organization {
  @ObjectIdColumn()
  @Field(() => ID)
  id!: number;

  @Column()
  @Field()
  name!: string;
}

@Resolver(Organization)
export class OrganizationResolver {
  @Query(() => Organization)
  async organization(@Args() { name }: OrganizationArgs) {
    if (!name) throw new Error("You must provide an name");

    // TODO: Do query to fetch the asked org from DB
    const manager = getManager();

    const org = await manager.findOne(Organization, { name });

    return org;
  }
}
