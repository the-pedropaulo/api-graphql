import { PrismaPostRepository } from "../../repositories/implementations/prisma/PrismaPostRepository";
import { PostUseCase } from "./PostUseCase";

const prismaService = new PrismaPostRepository();

const postUseCase = new PostUseCase(prismaService);

export { prismaService, postUseCase }