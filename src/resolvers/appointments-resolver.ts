import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";
import { Appointment } from "../dtos/models/appointment-model";
import { User } from "../dtos/models/user-model";

@Resolver(() => Appointment)
export class AppointmentResolver {
  constructor() {}

  @Query(() => [Appointment])
  async appointments() {
    return [
      {
        startsAt: new Date(),
        endsAt: new Date()
      }
    ];
  }

  @Mutation(() => Appointment)
  async createAppointment(@Arg('data') data: CreateAppointmentInput) {

    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    }
    return appointment;
  }

  @FieldResolver(() => User)
  async User(@Root() appointment: Appointment) {
    console.log(appointment)
    return {
      name: 'Pedro Paulo'
    }
  }
}