import { Schema, models, model } from "mongoose";

const userSchema = new Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      unique: true,
    },
    photo: {
      type: String,
      unique: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
  },
  { timestamps: false, versionKey: false }
);

const User = models?.User || model("User", userSchema);

export default User;
