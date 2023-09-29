import { PrismaClient } from "@prisma/client";
import { PrismaUserRepository } from "../../repositories/prisma/PrismaUserRepository";
import { UserService } from "./UserService";

const prisma = new PrismaClient();

const prismaRepository = new PrismaUserRepository(prisma);

const userService = new UserService(prismaRepository);

export { userService }
