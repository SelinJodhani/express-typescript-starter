import { compare, hash } from 'bcrypt'
import { sign } from 'jsonwebtoken'

import { CreateUserDto } from '@Dtos/user.dto'
import { SECRET_KEY } from '@Configs'
import { TokenData } from '@Interfaces/auth.interface'
import { UserInterface } from '@Interfaces/user.interface'

import HttpError from '@Classes/HttpError'
import User from '@Models/user.model'
import isEmpty from '@Utils/isEmpty'

const createToken = (user: UserInterface): TokenData => {
  const dataStoredInToken = { _id: user._id }
  const secretKey = SECRET_KEY
  const expiresIn = '30d'

  return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) }
}

const createCookie = (tokenData: TokenData): string => {
  return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`
}

const signup = async (userData: CreateUserDto): Promise<UserInterface> => {
  if (isEmpty(userData)) throw new HttpError(400, "You're not userData")

  const findUser: UserInterface = await User.findOne({ email: userData.email })

  if (findUser) throw new HttpError(409, `You're email ${userData.email} already exists`)

  const hashedPassword = await hash(userData.password, 12)
  const createUserData: UserInterface = await User.create({ ...userData, password: hashedPassword })

  return createUserData
}

const login = async (
  userData: CreateUserDto
): Promise<{ cookie: string; findUser: UserInterface }> => {
  if (isEmpty(userData)) throw new HttpError(400, "You're not userData")

  const findUser: UserInterface = await User.findOne({ email: userData.email }).select('+password')
  if (!findUser) throw new HttpError(409, `You're email ${userData.email} not found`)

  const isPasswordMatching: boolean = await compare(userData.password, findUser.password)
  if (!isPasswordMatching) throw new HttpError(409, "You're password not matching")

  findUser.password = undefined

  const tokenData = createToken(findUser)
  const cookie = createCookie(tokenData)

  return { cookie, findUser }
}

export { login, signup }
