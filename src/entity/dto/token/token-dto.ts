import {Field, ObjectType} from "type-graphql";

@ObjectType()
export class TokenDto {
  @Field()
  id!: string
  @Field()
  email!: string

  constructor(id: string, email: string) {
    this.id = id;
    this.email = email;
  }
}