import { UserCreateInput } from "../../dtos/inputs/User/user-create-input";
import { User } from "../../dtos/models/user-model";

export interface UserAdapter {
  allUsers(): Promise<User[]>;
  createUser(user: UserCreateInput): Promise<User>;
}