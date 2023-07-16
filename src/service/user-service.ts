import {LoginInput} from "../entity/dto/user/login-input";
import JwtService from "./jwt-service";
import {TokenDto} from "../entity/dto/token/token-dto";
import bcrypt from "bcrypt";
import {User} from "../entity/user";
import {instanceToPlain} from "class-transformer";
import {EntityManager} from "@mikro-orm/core";
import userRepository from "../repository/user-repository";
import TokenService from "./token-service";

type TokenResponse = Promise<{
  accessToken: string,
  refreshToken: string,
  user: TokenDto
}>;

class UserService {

  public async registration(em: EntityManager, dto: LoginInput): TokenResponse {
    try {
      const currentUser = await em.find(User, {email: dto.email})
      if (currentUser) throw new Error();

      const salt = await bcrypt.genSalt();
      dto.password = await bcrypt.hash(dto.password, salt);

      const createdUser = await userRepository.create(em, dto.email, dto.password);
      let tokenDto = new TokenDto(createdUser.id, createdUser.email);

      const tokens = JwtService.generateTokens(tokenDto);
      await TokenService.saveToken(em, createdUser.id, tokens.refreshToken);
      return {...tokens, user: tokenDto};
    } catch (e) {
      throw e;
    }
  }
}

export default new UserService();