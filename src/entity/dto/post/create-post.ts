import {Field, InputType} from 'type-graphql';

@InputType()
export class CreatePost {
  @Field()
  name: string;

  @Field()
  userId: string;
}
