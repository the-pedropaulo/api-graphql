import { Field, ObjectType } from "type-graphql";
import { User } from "./user-model";

@ObjectType()
export class Profile {
  @Field()
  id: number;

  @Field()
  user?: User | null;
  
  @Field()
  bio?: string | null;
}