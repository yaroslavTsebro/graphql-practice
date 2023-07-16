import postRepository from "../repository/post-repository";
import {Context} from "../type/context";
import {Post} from "../entity/post";
import {EntityManager} from "@mikro-orm/core";

class PostService {
  async create(em: EntityManager, name: string, userId: string): Promise<Post> {
    try {
      return postRepository.create(em, name, userId);
    } catch (e) {
      throw e;
    }
  }

  async getAll(em: EntityManager): Promise<Post[]> {
    try {
      return await postRepository.getAll(em);
    } catch (e) {
      throw e;
    }
  }

  async getById(em: EntityManager, id: string): Promise<Post> {
    try {
      return await postRepository.getById(em, id);
    } catch (e) {
      throw e;
    }
  }

  async delete(em: EntityManager, id: string): Promise<Post> {
    try {
      return await postRepository.delete(em, id);
    } catch (e) {
      throw e;
    }
  }
}

export default new PostService()