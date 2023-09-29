import { PrismaClient } from '@prisma/client'
import { Post } from '../../dtos/models/post-model';
import { PostAdapter } from '../../adapters/db/PostAdapter';

export class PrismaPostRepository implements PostAdapter {

  constructor(private prismaClient: PrismaClient) {}

  public async allPosts(): Promise<Post[]> {
    return await this.prismaClient.post.findMany();
  }
}