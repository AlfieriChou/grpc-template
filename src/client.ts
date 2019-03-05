import { MessageServiceClient } from '../model/message_grpc_pb'
import { MessageRequest, MessageResponse } from '../model/message_pb'
import { credentials, Metadata, ServiceError } from 'grpc'

const client: MessageServiceClient = new MessageServiceClient(
  '0.0.0.0:7000',
  credentials.createInsecure()
)

const params: MessageRequest = new MessageRequest()
params.setMessageId('dis')
params.setMessageType('what')

const metadata: Metadata = new Metadata()
metadata.add('dis', 'what')

client.addMessage(
  params,
  metadata,
  (err: ServiceError | null, res: MessageResponse) => {
    if (err) throw err
    console.log('------>', res)
  }
)
