import { MessageServiceClient } from '../model/message_grpc_pb'
import { MessageRequest, MessageResponse } from '../model/message_pb'
import { credentials, Metadata, ServiceError } from 'grpc'

const client: MessageServiceClient = new MessageServiceClient(
  '0.0.0.0:7000',
  credentials.createInsecure()
)

interface IMessage {
  messageId: string
  messageType: string
}

const addMessage = async (
  params: MessageRequest,
  metadata: Metadata = new Metadata()
): Promise<IMessage> => {
  return new Promise<IMessage>(
    (resolve: Function, reject: Function): void => {
      client.addMessage(
        params,
        metadata,
        (err: ServiceError | null, res: MessageResponse) => {
          if (err) {
            return reject(err)
          }
          resolve(res.toObject())
        }
      )
    }
  )
}

const bootstrap = async () => {
  const params: MessageRequest = new MessageRequest()
  params.setMessageId('dis')
  params.setMessageType('what')

  const metadata: Metadata = new Metadata()
  metadata.add('dis', 'what')
  const result = await addMessage(params, metadata)
  console.log('[gRPC]: ', result)
}

bootstrap()
