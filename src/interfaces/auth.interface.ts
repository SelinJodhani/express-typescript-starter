import { Request } from 'express'
import { UserInterface } from '@Interfaces/user.interface'

export interface TokenData {
  token: string
  expiresIn: string
}

export interface RequestWithUser extends Request {
  user: UserInterface
}
