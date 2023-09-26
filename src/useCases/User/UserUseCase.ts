import { PrismaUserRepository } from "../../repositories/implementations/prisma/PrismaUserRepository";

export class UserUseCase {
  constructor(
    private prismaRepository: PrismaUserRepository
  ) {}

  async getAll() {
    return await this.prismaRepository.allUsers()
  }
}