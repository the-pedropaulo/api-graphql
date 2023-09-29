import { UserAdapter } from "../../adapters/db/UserAdapter";
import { UserUseCase } from "../../core/UserUseCase";

export class UserService implements UserUseCase {
  constructor(
    private databaseGateway: UserAdapter
  ) {}

  async getAll() {
    return await this.databaseGateway.allUsers()
  }
}