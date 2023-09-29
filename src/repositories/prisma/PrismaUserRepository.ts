import { User } from '../../dtos/models/user-model';
import { UserAdapter } from '../../adapters/db/UserAdapter';
import { PrismaClient } from '@prisma/client';

export class PrismaUserRepository implements UserAdapter {

  constructor(private prismaClient: PrismaClient) {}
  
  public async allUsers(): Promise<User[]> {
    return await this.prismaClient.user.findMany();
  }
}