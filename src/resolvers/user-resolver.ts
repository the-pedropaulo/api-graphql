import { Query, Resolver } from "type-graphql";
import { User } from "../dtos/models/user-model";
import { userService } from "../app/User";


@Resolver(() => User)
export class UserResolver {

  @Query(() => [User])
  async getAllUsers() {
    return userService.getAll();
  }
}