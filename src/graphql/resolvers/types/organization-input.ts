import { InputType, Field } from 'type-graphql';
// import { Length } from 'class-validator';
import { Organizations } from '../../entities/organizations';

// @ArgsType()
// class OrganizationArgs {
//   @Field(() => String, { nullable: true })
//   id?: "";
// }


@InputType()
export class OrganizationsInput implements Partial<Organizations> {
  @Field()
  id!: number;

  @Field()
  name!: string;
}
