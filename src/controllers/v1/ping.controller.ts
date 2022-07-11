import { Request, Response, Router } from 'express'
import HttpResponse from '@Classes/HttpResponse'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  const response = new HttpResponse(200, { message: `pong - ${req.ip}` })
  res.status(response.status).send(response)
})

export default router
