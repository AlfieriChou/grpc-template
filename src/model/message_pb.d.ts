// package: message
// file: message.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class AddMessageRequest extends jspb.Message { 
    getMessageId(): string;
    setMessageId(value: string): void;

    getMessageType(): string;
    setMessageType(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddMessageRequest): AddMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddMessageRequest;
    static deserializeBinaryFromReader(message: AddMessageRequest, reader: jspb.BinaryReader): AddMessageRequest;
}

export namespace AddMessageRequest {
    export type AsObject = {
        messageId: string,
        messageType: string,
    }
}
