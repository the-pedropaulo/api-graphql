import { PrismaPostRepository } from "../../repositories/prisma/PrismaPostRepository";
import { PostService } from "./PostService";
import { context } from "../../repositories/prisma/context"

const prismaRepository = new PrismaPostRepository(context.prisma);
const postService = new PostService(prismaRepository);

export { postService }