import { UserCreateInput } from "../../dtos/inputs/User/user-create-input";
import { User } from "../../dtos/models/user-model";

export interface UserUseCase {
  getAll(): Promise<User[]>;
  create(user: UserCreateInput): Promise<User>
}