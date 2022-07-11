import { Router } from 'express'

export interface Route {
  path: string
  requestHandler: Router
}
