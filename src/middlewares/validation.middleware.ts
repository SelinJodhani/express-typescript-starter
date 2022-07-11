import HttpError from '@Classes/HttpError'

import { ValidationError, validate } from 'class-validator'
import { RequestHandler } from 'express'
import { plainToInstance } from 'class-transformer'

const validationMiddleware = (
  type: any,
  value: string | 'body' | 'query' | 'params' = 'body',
  skipMissingProperties = false,
  whitelist = true,
  forbidNonWhitelisted = true
): RequestHandler => {
  return (req, _res, next) => {
    validate(plainToInstance(type, req[value]), {
      skipMissingProperties,
      whitelist,
      forbidNonWhitelisted
    }).then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        return next(new HttpError(400, errors))
      }

      return next()
    })
  }
}

export default validationMiddleware
