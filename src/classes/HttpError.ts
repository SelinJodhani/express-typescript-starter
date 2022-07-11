import { HttpErrorInterface } from '@Interfaces/classes.interface'
import HttpStatus from '@Utils/statusCodes'

export default class HttpError extends Error implements HttpErrorInterface {
  public type: string
  public title: string
  public detail: string
  public status: number
  public errors: unknown

  constructor(status: number, errors: unknown) {
    super(String(status))

    const httpStatus = HttpStatus[status]

    if (!httpStatus) throw new Error('Unsupported or Invalid status code!')

    this.type = httpStatus.type
    this.title = httpStatus.title
    this.detail = httpStatus.detail
    this.status = httpStatus.status
    this.errors = [errors].flat(1)
  }
}
