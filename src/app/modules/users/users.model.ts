import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './users.interface'

// user schema
const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
  },
  {
    timestamps: true,
  },
)

//Create a Model.
export const User = model<IUser, UserModel>('User', userSchema)
