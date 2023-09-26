import { User } from "../../dtos/models/user-model";

export interface IUserRepository {
  allUsers(): Promise<User[]>;
}