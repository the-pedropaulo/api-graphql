import { PostAdapter } from "../../adapters/db/PostAdapter";
import { PostUseCase } from "../../core/useCases/PostUseCase";

export class PostService implements PostUseCase {
  constructor(
    private databaseGateway: PostAdapter
  ) {}

  async getAll() {
    return await this.databaseGateway.allPosts()
  }
}