import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
  firstName?: string,
  lastName?: string,
  email?: string,
  fullname(): string
}

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String
}, {
  timestamps: true
})

UserSchema.methods.fullName = function (): string {
  return this.firstName + ' ' + this.lastName
}

export default model<UserInterface>('User', UserSchema)
