import { Router } from 'express'

import { Route } from '@Interfaces/routes.interface'

import authHandler from '@Controllers/v1/auth.controller'
import pingHandler from '@Controllers/v1/ping.controller'

const router = Router()

const routes: Route[] = [
  {
    path: '/',
    requestHandler: authHandler
  },
  {
    path: '/ping',
    requestHandler: pingHandler
  }
]

routes.forEach(route => {
  router.use(route.path, route.requestHandler)
})

export default router
