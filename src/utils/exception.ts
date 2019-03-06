import { ServiceError, status } from 'grpc'

export class Exception implements ServiceError {
  public name: string = 'ServiceError'
  public code: status
  public message: string
  constructor(code: status, message?: string) {
    this.code = code
    this.message = message || 'Service Error'
  }
}

export class NotFound extends Exception {
  constructor(STATUS = status.NOT_FOUND, message = 'not found') {
    super(STATUS, message)
  }
}

export class NotAuthenticated extends Exception {
  constructor(STATUS = status.UNAUTHENTICATED, message = 'unauthenticated') {
    super(STATUS, message)
  }
}

export class PermissionDenied extends Exception {
  constructor(
    STATUS = status.PERMISSION_DENIED,
    message = 'permission denied'
  ) {
    super(STATUS, message)
  }
}

export class InvalidArgument extends Exception {
  constructor(STATUS = status.INVALID_ARGUMENT, message = 'invalid argument') {
    super(STATUS, message)
  }
}

export class Unknown extends Exception {
  constructor(STATUS = status.UNKNOWN, message = 'unknow') {
    super(STATUS, message)
  }
}
