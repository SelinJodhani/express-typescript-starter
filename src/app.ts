import { CREDENTIALS, LOG_FORMAT, ORIGIN } from '@Configs'
import { stream } from '@Utils/logger'

import HttpError from '@Classes/HttpError'
import controllers from '@Controllers/index'
import errorMiddleware from '@Middlewares/error.middleware'

import compression from 'compression'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

const app: express.Application = express()

app.use(morgan(LOG_FORMAT, { stream }))
app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', controllers)

app.all('*', (req, _res, next) => {
  return next(new HttpError(404, `Can't find ${req.originalUrl} on this server!`))
})

app.use(errorMiddleware)

export default app
