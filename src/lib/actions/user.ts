"use server";

import { connect } from "@/lib/db";
import User from "@/lib/models/User";

export async function createUser(user: any) {
  try {
    await connect();
    const newUser = User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}
