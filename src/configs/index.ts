import { config } from 'dotenv'
import validateEnv from '@Utils/validateEnv'

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` })

export const CREDENTIALS = process.env.CREDENTIALS === 'true'

export const { CONNECTION_URI, LOG_DIR, LOG_FORMAT, NODE_ENV, ORIGIN, PORT, SECRET_KEY } =
  validateEnv()
