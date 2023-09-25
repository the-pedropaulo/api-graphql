import { Field, InputType } from "type-graphql"

@InputType()
class UserCreateInput {
  @Field()
  email: string

  @Field({ nullable: true })
  name: string
}