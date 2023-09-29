import { Query, Resolver } from "type-graphql";
import { Post } from "../dtos/models/post-model";
import { postService } from "../app/Post";

@Resolver(Post)
export class PostResolver {
  
  @Query(() => [Post])
  async getAllPosts() {
    return postService.getAll();
  }
}