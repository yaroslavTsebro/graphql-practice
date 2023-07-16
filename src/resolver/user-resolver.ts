import {Arg, Ctx, Mutation, Resolver} from "type-graphql";
import {LoginReturn} from "../entity/dto/user/login-return";
import {LoginInput} from "../entity/dto/user/login-input";
import {EntityManager} from "@mikro-orm/core";
import userService from "../service/user-service";
import {User} from "../entity/user";

@Resolver(User)
export class UserResolver {

  @Mutation(() => LoginReturn)
  async registration(
      @Arg("options") options: LoginInput,
      @Ctx() em: EntityManager
  ): Promise<LoginReturn> {
    try {
      return await userService.registration(em, options);
    } catch (e) {
      throw e;
    }
  }
}