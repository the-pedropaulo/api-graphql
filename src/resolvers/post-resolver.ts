import { Query, Resolver } from "type-graphql";
import { Post } from "../dtos/models/post-model";
import { postUseCase } from "../useCases/Post";

@Resolver(Post)
export class PostResolver {
  
  @Query(() => [Post])
  async getAllPosts() {
    return postUseCase.getAll();
  }
}