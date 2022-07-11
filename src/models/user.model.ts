import { Document, Schema, model } from 'mongoose'
import { UserInterface } from '@Interfaces/user.interface'

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  }
})

const User = model<UserInterface & Document>('User', userSchema)

export default User
