import {Context} from "../type/context";
import {Token} from "../entity/token";
import {EntityManager} from "@mikro-orm/core";

class TokenRepository {
  async findByToken(em: EntityManager, token: string) {
    try {
      return await em.findOneOrFail(Token, {token: token});
    } catch (e) {
      throw e;
    }
  }

  async findByUser(em: EntityManager, userId: string) {
    try {
      return await em.findOneOrFail(Token, {user: userId});
    } catch (e) {
      throw e;
    }
  }

  async changeToken(em: EntityManager, token: string, userId: string) {
    try {
      const tokenEntity = await em.findOneOrFail(Token, {user: userId});
      tokenEntity.token = token;
      await em.persistAndFlush(tokenEntity);
      return tokenEntity;
    } catch (e) {
      throw e;
    }
  }

  async deleteByUserId(em: EntityManager, userId: string) {
    try {
      const post = await em.findOneOrFail(Token, {user: userId});
      await em.remove(post);
      return post;
    } catch (e) {
      throw e;
    }
  }
}

export default new TokenRepository()