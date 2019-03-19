import { MessageServiceClient } from '../model/message_grpc_pb'
import { MessageRequest, MessageResponse } from '../model/message_pb'
import { credentials, Metadata, ServiceError } from 'grpc'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const rootCerts = readFileSync(resolve(__dirname, '../../certs/ca.crt'))
const privateKey = readFileSync(resolve(__dirname, '../../certs/client.key'))
const certChain = readFileSync(resolve(__dirname, '../../certs/client.crt'))

const client: MessageServiceClient = new MessageServiceClient(
  'localhost:7000',
  credentials.createSsl(rootCerts, privateKey, certChain)
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
