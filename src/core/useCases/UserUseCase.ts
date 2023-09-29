import { User } from "../../dtos/models/user-model";

export interface UserUseCase {
  getAll(): Promise<User[]>;
}