// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('grpc')
var message_pb = require('./message_pb.js')

function serialize_message_MessageRequest(arg) {
  if (!(arg instanceof message_pb.MessageRequest)) {
    throw new Error('Expected argument of type message.MessageRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_message_MessageRequest(buffer_arg) {
  return message_pb.MessageRequest.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_message_MessageResponse(arg) {
  if (!(arg instanceof message_pb.MessageResponse)) {
    throw new Error('Expected argument of type message.MessageResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_message_MessageResponse(buffer_arg) {
  return message_pb.MessageResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

// ---------------Message service-------------------
//
var MessageServiceService = (exports.MessageServiceService = {
  addMessage: {
    path: '/message.MessageService/addMessage',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.MessageRequest,
    responseType: message_pb.MessageResponse,
    requestSerialize: serialize_message_MessageRequest,
    requestDeserialize: deserialize_message_MessageRequest,
    responseSerialize: serialize_message_MessageResponse,
    responseDeserialize: deserialize_message_MessageResponse
  }
})

exports.MessageServiceClient = grpc.makeGenericClientConstructor(
  MessageServiceService
)
