import { PrismaClient } from '@prisma/client'
import { User } from '../dtos/models/user-model';

const prisma = new PrismaClient()

interface Context {
  prisma: PrismaClient
}

export class PrismaService {
  public async allUsers(): Promise<User[]> {
    return await prisma.user.findMany();
  }
}