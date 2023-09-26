import { PrismaClient } from '@prisma/client'
import { IPostRepository } from '../../interfaces/IPostRepository';
import { Post } from '../../../dtos/models/post-model';

const prisma = new PrismaClient()

interface Context {
  prisma: PrismaClient
}

export class PrismaPostRepository implements IPostRepository {
  public async allPosts(): Promise<Post[]> {
    return await prisma.post.findMany();
  }
}