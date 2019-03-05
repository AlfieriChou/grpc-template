// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var message_pb = require('./message_pb.js');

function serialize_message_AddMessageRequest(arg) {
  if (!(arg instanceof message_pb.AddMessageRequest)) {
    throw new Error('Expected argument of type message.AddMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_message_AddMessageRequest(buffer_arg) {
  return message_pb.AddMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// ---------------Message service-------------------
//
var MessageServiceService = exports.MessageServiceService = {
  addMessage: {
    path: '/message.MessageService/addMessage',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.AddMessageRequest,
    responseType: message_pb.AddMessageRequest,
    requestSerialize: serialize_message_AddMessageRequest,
    requestDeserialize: deserialize_message_AddMessageRequest,
    responseSerialize: serialize_message_AddMessageRequest,
    responseDeserialize: deserialize_message_AddMessageRequest,
  },
};

exports.MessageServiceClient = grpc.makeGenericClientConstructor(MessageServiceService);
