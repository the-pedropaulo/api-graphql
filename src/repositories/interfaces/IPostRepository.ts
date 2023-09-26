import { Post } from "../../dtos/models/post-model";

export interface IPostRepository {
  allPosts(): Promise<Post[]>;
}