import { ObjectType, Field, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';

@ObjectType({description: 'The Organizations model' })
export class Organizations {
  @Field(() => ID)
  id!: number;

  @Field()
  name!: string;
}
export const OrganizationsModel = getModelForClass(Organizations);

