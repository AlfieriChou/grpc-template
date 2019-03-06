import { ServiceError as grpcServiceError, status } from 'grpc'

export class ServiceError implements grpcServiceError {
  public name: string = 'ServiceError'
  public code: status
  public message: string
  constructor(code: status, message?: string) {
    this.code = code
    this.message = message || 'Service Error'
  }
}
