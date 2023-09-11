import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";
import { Appointment } from "../dtos/models/appointment-model";

@Resolver()
export  class AppointmentResolver {
  constructor() {}

  @Query(() => String)
  async helloWorld() {
    return 'Hello World';
  }

  @Mutation(() => Appointment)
  async createAppointment(@Arg('data') data: CreateAppointmentInput) {

    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    }

    console.log(appointment)

    return appointment;
  }
}