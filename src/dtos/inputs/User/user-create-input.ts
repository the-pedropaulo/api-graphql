import { Field, InputType } from "type-graphql"

@InputType()
export class UserCreateInput {
  @Field()
  email: string

  @Field({ nullable: true })
  name: string
}