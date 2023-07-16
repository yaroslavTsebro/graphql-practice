import {User} from "../../user";
import {Field, ObjectType} from "type-graphql";
import {TokenDto} from "../token/token-dto";

@ObjectType()
export class LoginReturn {
  @Field(type => User)
  user: TokenDto;
  @Field()
  accessToken: string;
  @Field()
  refreshToken: string;
}