import { PrismaClient } from "@prisma/client";
import { PrismaPostRepository } from "../../repositories/prisma/PrismaPostRepository";
import { PostService } from "./PostService";

const prisma = new PrismaClient();

const prismaRepository = new PrismaPostRepository(prisma);

const postService = new PostService(prismaRepository);

export { postService }