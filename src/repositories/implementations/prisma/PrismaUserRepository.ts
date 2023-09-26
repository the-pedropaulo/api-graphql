import { PrismaClient } from '@prisma/client'
import { User } from '../../../dtos/models/user-model';
import { IUserRepository } from '../../interfaces/IUserRepository';

const prisma = new PrismaClient()

interface Context {
  prisma: PrismaClient
}

export class PrismaUserRepository implements IUserRepository {
  public async allUsers(): Promise<User[]> {
    return await prisma.user.findMany();
  }
}