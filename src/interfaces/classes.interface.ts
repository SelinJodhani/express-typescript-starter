export interface HttpErrorInterface {
  type: string
  title: string
  detail: string
  status: number
  errors: unknown
}

export interface HttpResponseInterface {
  type: string
  title: string
  detail: string
  status: number
  results: Array<object> | object
}
