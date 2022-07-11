import { NextFunction, Request, Response } from 'express'
import { logger } from '@Utils/logger'

import HttpError from '@Classes/HttpError'

const errorMiddleware = (error: HttpError, req: Request, res: Response, next: NextFunction) => {
  try {
    const status: number = error.status || 500
    const message: string = error.message || 'Something went wrong'

    logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`)

    if (error instanceof HttpError) return res.status(error.status).send(error)

    return res.status(status).json(error)
  } catch (err) {
    return next(err)
  }
}

export default errorMiddleware
