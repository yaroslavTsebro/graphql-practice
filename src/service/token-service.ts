import TokenRepository from "../repository/token-repository";
import {Token} from "../entity/token";
import {EntityManager} from "@mikro-orm/core";

class TokenService {

  async saveToken(em: EntityManager, userId: string, refreshToken: string): Promise<Token> {
    let token = await TokenRepository.findByUser(em, userId);
    let updated;

    if (token) {
      token.token = refreshToken;
      updated = await TokenRepository.changeToken(em, refreshToken,userId);
    } else {
      updated = await TokenRepository.changeToken(em, refreshToken,userId);
    }
    return updated;
  }

  async removeToken(em: EntityManager, refreshToken: string): Promise<Token> {
    try {
      return await TokenRepository.deleteByUserId(em, refreshToken)
    } catch (e) {
     throw e;
    }
  }

  async findByToken(em: EntityManager, token: string): Promise<Token> {
    try {
      const tokenInstance = await TokenRepository.findByToken(em, token);
      if (tokenInstance) {
        return tokenInstance;
      }
      throw new Error();
    } catch (e) {
      throw new Error();
    }
  }

}

export default new TokenService();