// package: message
// file: message.proto

/* tslint:disable */

import * as jspb from 'google-protobuf'

export class MessageRequest extends jspb.Message {
  getMessageId(): string
  setMessageId(value: string): void

  getMessageType(): string
  setMessageType(value: string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): MessageRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: MessageRequest
  ): MessageRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: MessageRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): MessageRequest
  static deserializeBinaryFromReader(
    message: MessageRequest,
    reader: jspb.BinaryReader
  ): MessageRequest
}

export namespace MessageRequest {
  export type AsObject = {
    messageId: string
    messageType: string
  }
}

export class MessageResponse extends jspb.Message {
  getMessageId(): string
  setMessageId(value: string): void

  getMessageType(): string
  setMessageType(value: string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): MessageResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: MessageResponse
  ): MessageResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: MessageResponse,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): MessageResponse
  static deserializeBinaryFromReader(
    message: MessageResponse,
    reader: jspb.BinaryReader
  ): MessageResponse
}

export namespace MessageResponse {
  export type AsObject = {
    messageId: string
    messageType: string
  }
}
