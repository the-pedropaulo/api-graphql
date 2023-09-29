import { User } from "../../dtos/models/user-model";

export interface UserAdapter {
  allUsers(): Promise<User[]>;
}