import { IsEmail, IsString, Matches } from 'class-validator'

export class CreateUserDto {
  @IsEmail()
  public email: string

  @IsString()
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
    message: 'Password is not strong enough!'
  })
  public password: string
}
