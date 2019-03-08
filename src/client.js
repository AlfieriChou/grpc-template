const messageGrpc = require('../model/message_grpc_pb')
const message = require('../model/message_pb')
const grpc = require('grpc')

const client = new messageGrpc.MessageServiceClient(
  '0.0.0.0:7000',
  grpc.credentials.createInsecure()
)

const request = new message.MessageRequest()
request.setMessageId('dis')
request.setMessageType('what')

const metadata = new grpc.Metadata()
metadata.set('dis', 'what')

client.addMessage(request, metadata, (err, data) => {
  if (err) throw err
  const result = data.toObject()
  console.log('[gRPC]: ', result)
})
