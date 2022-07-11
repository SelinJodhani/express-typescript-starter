import { HttpStatusInterface } from '@Interfaces/utils.interface'

const HttpStatus: HttpStatusInterface = {
  200: {
    type: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1',
    title: 'OK',
    status: 200,
    detail: 'The request has succeeded.'
  },
  201: {
    type: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2',
    title: 'CREATED',
    status: 201,
    detail: 'The request succeeded, and a new resource was created as a result.'
  },
  202: {
    type: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3',
    title: 'Accepted',
    status: 202,
    detail: 'The request has been received but not yet acted upon.'
  },
  400: {
    type: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1',
    title: 'BAD_REQUEST',
    status: 400,
    detail: 'The request cannot be fulfilled due to bad syntax.'
  },
  401: {
    type: 'https://datatracker.ietf.org/doc/html/rfc7235#section-4.2',
    title: 'UNAUTHORIZED',
    status: 401,
    detail: 'Authentication failed or not yet been provided.'
  },
  403: {
    type: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3',
    title: 'FORBIDDEN',
    status: 403,
    detail: 'The request was a legal request, but the server is refusing to respond to it.'
  },
  404: {
    type: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4',
    title: 'NOT_FOUND',
    status: 404,
    detail: 'The requested resource could not be found but may be available again in the future.'
  },
  405: {
    type: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5',
    title: 'METHOD_NOT_ALLOWED',
    status: 405,
    detail: 'Requested method is not supported for the requested resource.'
  },
  409: {
    type: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8',
    title: 'CONFLICT',
    status: 409,
    detail:
      'The request could not be completed due to a conflict with the current state of resource.'
  },
  413: {
    type: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11',
    title: 'REQUEST_ENTITY_TOO_LARGE',
    status: 413,
    detail: 'The request is larger than the server is willing or able to process.'
  },
  429: {
    type: 'https://www.rfc-editor.org/rfc/rfc6585#section-4',
    title: 'TOO_MANY_REQUEST',
    status: 429,
    detail: 'Received too many requests in a given amount of time.'
  },
  500: {
    type: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1',
    title: 'INTERNAL_SERVER_ERROR',
    status: 500,
    detail:
      'Server encountered an unexpected condition that prevented it from fulfilling the request.'
  }
}

export default HttpStatus
