import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { AppointmentResolver } from "./resolvers/appointments-resolver";
import path from 'node:path'
import { UserResolver } from "./resolvers/user-resolver";
import { PostResolver } from "./resolvers/post-resolver";
require('dotenv').config()

async function bootstrap() {

  const schema = await buildSchema({
    resolvers: [
      AppointmentResolver,
      UserResolver,
      PostResolver
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  })

  const server = new ApolloServer({
    schema
  })

  const { url } = await server.listen();
  console.log(`🔥 HTTP server listening on ${url}`);
}

bootstrap();