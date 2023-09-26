import { PrismaPostRepository } from "../../repositories/implementations/prisma/PrismaPostRepository";

export class PostUseCase {
  constructor(
    private prismaRepository: PrismaPostRepository
  ) {}

  async getAll() {
    return await this.prismaRepository.allPosts()
  }
}