import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../dtos/models/user-model";
import { userService } from "../app/User";
import { UserCreateInput } from "../dtos/inputs/User/user-create-input";


@Resolver(() => User)
export class UserResolver {

  @Query(() => [User])
  async getAllUsers(): Promise<User[]> {
    return userService.getAll();
  }

  @Mutation(() => User)
  async createUser(
    @Arg('data') data: UserCreateInput,
  ): Promise<User> {

    return userService.create(data);
    
  }
}