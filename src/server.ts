import { NODE_ENV, PORT } from '@Configs'
import { dbConnection } from '@Databases'
import { logger } from '@Utils/logger'

import { connect, set } from 'mongoose'

import app from './app'

if (NODE_ENV !== 'production') {
  set('debug', true)
}

app.listen(+PORT, () => {
  logger.info(`==================================`)
  logger.info(`======== ENV: ${NODE_ENV} ========`)
  logger.info(`🚀 App listening on the port ${PORT}`)
  logger.info(`==================================`)
})

connect(dbConnection.URL).then(() => {
  logger.info('✅ Database connected successfully')
  logger.info(`==================================`)
})
