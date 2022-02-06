import {
  Args,
  ArgsType,
  Field,
  ObjectType,
  Query,
  Resolver
} from "type-graphql";

import { Entity, PrimaryGeneratedColumn, Column, getManager } from "typeorm";

@ArgsType()
class OrganizationArgs {
  @Field(() => Number, { nullable: true })
  id?: null;

  @Field(() => String, { nullable: true })
  org_name?: "";
}

@Entity()
@ObjectType()
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field()
  org_name: string;
}

@Resolver(Organization)
export class OrganizationResolver {
  @Query(() => Organization)
  async findOne(@Args() { id }: OrganizationArgs): Promise<any> {
    if (!id) throw new Error("You must provide an id");

    // TODO: Do query to fetch the asked org from DB
    const manager = getManager();

    const org = await manager.findOne(Organization, { id });

    return org;
  }
}
