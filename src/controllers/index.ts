import { Router } from 'express'

import versionV1 from './v1/index'

const router = Router()

const routes = [
  {
    path: '/v1',
    requestHandler: versionV1
  }
]

routes.forEach(route => {
  router.use(route.path, route.requestHandler)
})

export default router
