import {
  IMessageServiceServer,
  MessageServiceService
} from '../../model/message_grpc_pb'
import { MessageRequest, MessageResponse } from '../../model/message_pb'
import { ServerUnaryCall, sendUnaryData } from 'grpc'
import { NotFound } from '../utils/exception'
import { logger } from '../utils/logger'

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
    logger.info('message: ' + JSON.stringify(call.request.toObject()))
    if (!call.request.toObject()) {
      return callback(new NotFound(), null)
    }
    const data: IMessage = call.request.toObject()
    res.setMessageId(data.messageId)
    res.setMessageType(data.messageType)
    callback(null, res)
  }
}

export { Message, MessageServiceService }
