import { UserAdapter } from "../../adapters/db/UserAdapter";
import { UserUseCase } from "../../core/useCases/UserUseCase";
import { UserCreateInput } from "../../dtos/inputs/User/user-create-input";
import { User } from "../../dtos/models/user-model";

export class UserService implements UserUseCase {
  constructor(
    private databaseGateway: UserAdapter
  ) {}

  async getAll() {
    return await this.databaseGateway.allUsers()
  }

  async create(user: UserCreateInput): Promise<User> {
    return await this.databaseGateway.createUser(user)
  }
}