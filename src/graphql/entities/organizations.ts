import { ObjectType, Field, ID } from 'type-graphql';
// import { getModelForClass } from '@typegoose/typegoose';
import { Entity, ObjectIdColumn, Column } from "typeorm";

@ObjectType({description: 'The Organizations model' })
@Entity()
export class Organizations {
  @ObjectIdColumn()
  @Field(() => ID)
  id!: number;

  @Column()
  @Field()
  name!: string;
}
