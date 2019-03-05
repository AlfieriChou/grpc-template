// package: message
// file: message.proto

/* tslint:disable */

import * as grpc from 'grpc'
import * as message_pb from './message_pb'

interface IMessageServiceService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  addMessage: IMessageServiceService_IaddMessage
}

interface IMessageServiceService_IaddMessage
  extends grpc.MethodDefinition<
    message_pb.MessageRequest,
    message_pb.MessageResponse
  > {
  path: string // "/message.MessageService/addMessage"
  requestStream: boolean // false
  responseStream: boolean // false
  requestSerialize: grpc.serialize<message_pb.MessageRequest>
  requestDeserialize: grpc.deserialize<message_pb.MessageRequest>
  responseSerialize: grpc.serialize<message_pb.MessageResponse>
  responseDeserialize: grpc.deserialize<message_pb.MessageResponse>
}

export const MessageServiceService: IMessageServiceService

export interface IMessageServiceServer {
  addMessage: grpc.handleUnaryCall<
    message_pb.MessageRequest,
    message_pb.MessageResponse
  >
}

export interface IMessageServiceClient {
  addMessage(
    request: message_pb.MessageRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: message_pb.MessageResponse
    ) => void
  ): grpc.ClientUnaryCall
  addMessage(
    request: message_pb.MessageRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: message_pb.MessageResponse
    ) => void
  ): grpc.ClientUnaryCall
  addMessage(
    request: message_pb.MessageRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: message_pb.MessageResponse
    ) => void
  ): grpc.ClientUnaryCall
}

export class MessageServiceClient extends grpc.Client
  implements IMessageServiceClient {
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: object
  )
  public addMessage(
    request: message_pb.MessageRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: message_pb.MessageResponse
    ) => void
  ): grpc.ClientUnaryCall
  public addMessage(
    request: message_pb.MessageRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: message_pb.MessageResponse
    ) => void
  ): grpc.ClientUnaryCall
  public addMessage(
    request: message_pb.MessageRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: message_pb.MessageResponse
    ) => void
  ): grpc.ClientUnaryCall
}
