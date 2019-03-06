import { ServiceError as grpcServiceError, status } from 'grpc'

export class ServiceError implements grpcServiceError {
  public name: string = 'ServiceError'
  constructor(public code: status, public message: string) {}
}
