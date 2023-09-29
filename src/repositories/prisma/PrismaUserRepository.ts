import { User } from '../../dtos/models/user-model';
import { UserAdapter } from '../../adapters/db/UserAdapter';
import { PrismaClient } from '@prisma/client';
import { UserCreateInput } from '../../dtos/inputs/User/user-create-input';

export class PrismaUserRepository implements UserAdapter {

  constructor(private prismaClient: PrismaClient) {}
  
  async allUsers(): Promise<User[]> {
    return await this.prismaClient.user.findMany();
  }

  async createUser(user: UserCreateInput): Promise<User> {
    return await this.prismaClient.user.create({
      data: {
        email: user.email,
        name: user.name,
      },
    })
  }
}