import { Ctx, Query, Resolver } from "type-graphql";
import { PrismaService } from "../services/prisma";
import { User } from "../dtos/models/user-model";
import { PrismaClient } from "@prisma/client";

@Resolver(() => User)
export class UserResolver {
  public prismaService: any;

  constructor() {
    this.prismaService = new PrismaService();
  }

  @Query(() => [User])
  async getAllUsers() {
    return await this.prismaService.allUsers()
  }
}