import {Arg, Ctx, Mutation, Query, Resolver} from "type-graphql";
import {Post} from "../entity/post";
import postService from "../service/post-service";
import {EntityManager} from "@mikro-orm/core";
import {CreatePost} from "../entity/dto/post/create-post";

@Resolver(Post)
export class PostResolver {

  @Query(() => [Post])
  async allPosts(
      @Ctx() em: EntityManager
  ): Promise<Post[]> {
    try {
      return await postService.getAll(em);
    } catch (e) {
      throw e;
    }
  }

  @Query(() => Post)
  async getPostById(
      @Ctx() em: EntityManager,
      @Arg("ID", () => String) id: string,
  ): Promise<Post> {
    try {
      return await postService.getById(em, id);
    } catch (e) {
      throw e;
    }
  }

  @Mutation(() => Post)
  async create(
      @Ctx() em: EntityManager,
      @Arg('options') options: CreatePost,
  ): Promise<Post> {
    try {
      return await postService.create(em, options.name, options.userId);
    } catch (e) {
      throw e;
    }
  }

  @Mutation(() => Post)
  async delete(
      @Ctx() em: EntityManager,
      @Arg('ID', () => String) id: string,
  ): Promise<Post> {
    try {
      return await postService.delete(em, id);
    } catch (e) {
      throw e;
    }
  }
}