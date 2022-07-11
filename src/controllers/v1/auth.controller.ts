import { NextFunction, Request, Response, Router } from 'express'

import { login, signup } from '@Services/auth.service'
import { CreateUserDto } from '@Dtos/user.dto'
import { UserInterface } from '@Interfaces/user.interface'

import HttpResponse from '@Classes/HttpResponse'
import validationMiddleware from '@Middlewares/validation.middleware'

const router = Router()

router.post(
  '/login',
  validationMiddleware(CreateUserDto, 'body'),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body
      const { cookie, findUser } = await login(userData)

      res.setHeader('Set-Cookie', [cookie])

      const response = new HttpResponse(200, findUser)
      return res.status(response.status).json(response)
    } catch (error) {
      return next(error)
    }
  }
)

router.post(
  '/signup',
  validationMiddleware(CreateUserDto, 'body'),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body
      const signUpUserData: UserInterface = await signup(userData)

      const response = new HttpResponse(201, signUpUserData)
      return res.status(response.status).json(response)
    } catch (error) {
      return next(error)
    }
  }
)

export default router
