import { Server, ServerCredentials, KeyCertPair } from 'grpc'
import { MessageServiceService, Message } from './service/message'
import { readFileSync } from 'fs'
import { resolve } from 'path'

let port: number = 7000
const rootCerts = readFileSync(resolve(__dirname, '../cert/ca.crt'))
const keyCertPairs: KeyCertPair[] = [
  {
    private_key: readFileSync(resolve(__dirname, '../cert/server.key')),
    cert_chain: readFileSync(resolve(__dirname, '../cert/server.crt'))
  }
]

const server = new Server()
server.addService(MessageServiceService, new Message())
server.bind(
  `0.0.0.0:${port}`,
  ServerCredentials.createSsl(rootCerts, keyCertPairs, true)
)
console.info('Listening on http://localhost:7000')
server.start()
