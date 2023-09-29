import { Post } from "../../dtos/models/post-model";

export interface PostUseCase {
  getAll(): Promise<Post[]>;
}