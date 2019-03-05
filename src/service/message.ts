import {
  IMessageServiceServer,
  MessageServiceService
} from '../../model/message_grpc_pb'
import { MessageRequest, MessageResponse } from '../../model/message_pb'
import { ServerUnaryCall, sendUnaryData } from 'grpc'

class Message implements IMessageServiceServer {
  public addMessage(
    call: ServerUnaryCall<MessageRequest>,
    callback: sendUnaryData<MessageResponse>
  ): void {
    const res: MessageResponse = new MessageResponse()
    res.setMessageId = call.request.getMessageId
    res.setMessageType = call.request.getMessageType
    console.log('------>', res)
    callback(null, res)
  }
}

export { Message, MessageServiceService }
