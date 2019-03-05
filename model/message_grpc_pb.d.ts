// package: message
// file: message.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as message_pb from "./message_pb";

interface IMessageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addMessage: IMessageServiceService_IaddMessage;
}

interface IMessageServiceService_IaddMessage extends grpc.MethodDefinition<message_pb.AddMessageRequest, message_pb.AddMessageRequest> {
    path: string; // "/message.MessageService/addMessage"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<message_pb.AddMessageRequest>;
    requestDeserialize: grpc.deserialize<message_pb.AddMessageRequest>;
    responseSerialize: grpc.serialize<message_pb.AddMessageRequest>;
    responseDeserialize: grpc.deserialize<message_pb.AddMessageRequest>;
}

export const MessageServiceService: IMessageServiceService;

export interface IMessageServiceServer {
    addMessage: grpc.handleUnaryCall<message_pb.AddMessageRequest, message_pb.AddMessageRequest>;
}

export interface IMessageServiceClient {
    addMessage(request: message_pb.AddMessageRequest, callback: (error: grpc.ServiceError | null, response: message_pb.AddMessageRequest) => void): grpc.ClientUnaryCall;
    addMessage(request: message_pb.AddMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.AddMessageRequest) => void): grpc.ClientUnaryCall;
    addMessage(request: message_pb.AddMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.AddMessageRequest) => void): grpc.ClientUnaryCall;
}

export class MessageServiceClient extends grpc.Client implements IMessageServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public addMessage(request: message_pb.AddMessageRequest, callback: (error: grpc.ServiceError | null, response: message_pb.AddMessageRequest) => void): grpc.ClientUnaryCall;
    public addMessage(request: message_pb.AddMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.AddMessageRequest) => void): grpc.ClientUnaryCall;
    public addMessage(request: message_pb.AddMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.AddMessageRequest) => void): grpc.ClientUnaryCall;
}
