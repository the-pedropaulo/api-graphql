import { Query, Resolver } from "type-graphql";
import { User } from "../dtos/models/user-model";
import { userUseCase } from "../useCases/User";


@Resolver(() => User)
export class UserResolver {

  @Query(() => [User])
  async getAllUsers() {
    return userUseCase.getAll();
  }
}