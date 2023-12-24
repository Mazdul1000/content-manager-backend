import { Model } from 'mongoose'

type IProfile = {
  firstName: string
  lastName: string
  dob: string
  avatarUrl: string
  gender: string
}

export type IUser = {
  username: string
  password: string
  email: string
  profile: IProfile
  role: string
}

export type UserModel = Model<IUser, object>
