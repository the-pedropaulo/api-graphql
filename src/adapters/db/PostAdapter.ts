import { Post } from "../../dtos/models/post-model";

export interface PostAdapter {
  allPosts(): Promise<Post[]>;
}