import { Server, ServerCredentials } from 'grpc'
import { MessageServiceService, Message } from './service/message'

let port: number = 7000

const server = new Server()
server.addService(MessageServiceService, new Message())
server.bind(`0.0.0.0:${port}`, ServerCredentials.createInsecure())
console.info('Listening on http://localhost:7000')
server.start()
