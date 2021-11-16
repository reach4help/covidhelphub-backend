import {
  Args,
  ArgsType,
  Field,
  ID,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";

@ArgsType()
class OrganizationArgs {
  @Field(() => String, { nullable: true })
  id?: "";
}

@ObjectType()
export class Organization {
  @Field(() => ID)
  id!: number;

  @Field()
  name!: string;
}

@Resolver(Organization)
export class OrganizationResolver {
  @Query(() => Organization)
  async organization(@Args() { id }: OrganizationArgs) {
    if (!id) throw new Error("You must provide an Id");

    // TODO: Do query to fetch the asked org from DB

    return { id: "test", name: "testName" };
  }
}
