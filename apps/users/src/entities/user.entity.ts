import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';

@ObjectType()
// Tells Apollo federation how to identify a user by its id
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
