import { bool, cleanEnv, port, str, url } from 'envalid'

const validateEnv = () =>
  cleanEnv(process.env, {
    PORT: port({ default: 3000 }),
    CONNECTION_URI: url({ default: 'mongodb://localhost:27017' }),
    LOG_FORMAT: str({ default: 'dev' }),
    LOG_DIR: str({ default: '../../logs' }),
    ORIGIN: str({ default: '*' }),
    CREDENTIALS: bool({ default: true }),
    SECRET_KEY: str({ default: 'mySecretKey' }),
    NODE_ENV: str({ choices: ['development', 'production'] })
  })

export default validateEnv
