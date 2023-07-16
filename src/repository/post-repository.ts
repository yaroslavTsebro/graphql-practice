import {Context} from "../type/context";
import e from "express";
import {Post} from "../entity/post";
import {User} from "../entity/user";

class PostRepository{
  async getAll({em}: Context): Promise<Post[]>{
    try{
      return await em.find(Post, {});
    }catch (e) {
      throw e;
    }
  }

  async getById({em}: Context, id: string): Promise<Post>{
    try{
      return await em.findOneOrFail(Post, {id: id});
    }catch (e) {
      throw e;
    }
  }

  async create({em}: Context, name: string, userId: string): Promise<Post>{
    try{
      const user = await em.findOneOrFail(User, { id: userId });
      const post = new Post();
      post.name = name;
      post.author = user;
      await em.persistAndFlush(post);
      return post;
    }catch (e) {
      throw e;
    }
  }

  async delete({em}: Context, id: string): Promise<Post>{
    try{
      const post = await em.findOneOrFail(Post, {id: id});
      await em.remove(post);
      return post;
    }catch (e) {
      throw e;
    }
  }
}

export default new PostRepository();