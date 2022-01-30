import {
  Args,
  ArgsType,
  Field,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";

import { Entity, PrimaryGeneratedColumn, Column, getManager } from "typeorm";

@ArgsType()
class OrganizationArgs {
  @Field(() => Number, { nullable: true })
  id?: null;

  @Field(() => String, { nullable: true })
  name?: "";
}

@ObjectType()
@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @Field()
  name!: string;
}

@Resolver(Organization)
export class OrganizationResolver {
  @Query(() => Organization)
  async organization(@Args() { id }: OrganizationArgs) {
    if (!id) throw new Error("You must provide an id");

    // TODO: Do query to fetch the asked org from DB
    const manager = getManager();

    const org = await manager.findOne(Organization, { id });

    return org;
  }
}
