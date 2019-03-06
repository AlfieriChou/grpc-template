import {
  IMessageServiceServer,
  MessageServiceService
} from '../../model/message_grpc_pb'
import { MessageRequest, MessageResponse } from '../../model/message_pb'
import { ServerUnaryCall, sendUnaryData, status } from 'grpc'
import { ServiceError } from 'src/utils/error'

interface IMessage {
  messageId: string
  messageType: string
}

class Message implements IMessageServiceServer {
  public addMessage(
    call: ServerUnaryCall<MessageRequest>,
    callback: sendUnaryData<MessageResponse>
  ): void {
    const res: MessageResponse = new MessageResponse()
    console.log('[gRPC]: ', call.request.toObject())
    if (!call.request.toObject()) {
      return callback(
        new ServiceError(status.INVALID_ARGUMENT, 'InvalidValue'),
        null
      )
    }
    const data: IMessage = call.request.toObject()
    res.setMessageId(data.messageId)
    res.setMessageType(data.messageType)
    callback(null, res)
  }
}

export { Message, MessageServiceService }
