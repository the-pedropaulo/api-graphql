import { Field, InputType } from "type-graphql"

@InputType()
export class UserUniqueInput {
  @Field({ nullable: true })
  id: number

  @Field({ nullable: true })
  email: string
}