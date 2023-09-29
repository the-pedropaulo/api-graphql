import { PrismaUserRepository } from "../../repositories/prisma/PrismaUserRepository";
import { UserService } from "./UserService";
import { context } from "../../repositories/prisma/context"

const prismaRepository = new PrismaUserRepository(context.prisma);
const userService = new UserService(prismaRepository);

export { userService }
