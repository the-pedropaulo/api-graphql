import { PrismaUserRepository } from "../../repositories/implementations/prisma/PrismaUserRepository";
import { UserUseCase } from "./UserUseCase";

const prismaService = new PrismaUserRepository();

const userUseCase = new UserUseCase(prismaService);

export { prismaService, userUseCase }