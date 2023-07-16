import {EntityManager} from "@mikro-orm/core";
import {User} from "../entity/user";

class UserRepository{
  async create(em: EntityManager, email: string, password: string){
    try {
      const user = new User();
      user.email = email;
      user.password = password;
      await em.persistAndFlush(user);
      return user;
    } catch (e) {
      throw e;
    }
  }
}

export default new UserRepository();