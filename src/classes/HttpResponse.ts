import { HttpResponseInterface } from '@Interfaces/classes.interface'
import HttpStatus from '@Utils/statusCodes'

export default class HttpResponse implements HttpResponseInterface {
  public type: string
  public title: string
  public detail: string
  public status: number
  public results: Array<object> | object

  constructor(status: number, results: Array<object> | object = []) {
    const httpStatus = HttpStatus[status]

    if (!httpStatus) throw new Error('Unsupported or Invalid status code!')

    this.type = httpStatus.type
    this.title = httpStatus.title
    this.detail = httpStatus.detail
    this.status = httpStatus.status
    this.results = [results].flat(1)
  }
}
