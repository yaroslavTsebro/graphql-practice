import {IsEmail, IsStrongPassword} from "class-validator";

export class CreateUser {
  @IsEmail()
  email!: string

  @IsStrongPassword({minLength: 3})
  password!: string
}