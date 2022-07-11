export interface HttpStatusInterface {
  [key: number]: {
    type: string
    title: string
    status: number
    detail: string
  }
}
