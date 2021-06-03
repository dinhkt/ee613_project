/**
 * @fileoverview gRPC-Web generated client stub for cinema
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.cinema = require('./cinema_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cinema.CinemaServicesClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cinema.CinemaServicesPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cinema.Movie,
 *   !proto.cinema.SeatInfo>}
 */
const methodDescriptor_CinemaServices_checkseat = new grpc.web.MethodDescriptor(
  '/cinema.CinemaServices/checkseat',
  grpc.web.MethodType.UNARY,
  proto.cinema.Movie,
  proto.cinema.SeatInfo,
  /**
   * @param {!proto.cinema.Movie} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cinema.SeatInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cinema.Movie,
 *   !proto.cinema.SeatInfo>}
 */
const methodInfo_CinemaServices_checkseat = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cinema.SeatInfo,
  /**
   * @param {!proto.cinema.Movie} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cinema.SeatInfo.deserializeBinary
);


/**
 * @param {!proto.cinema.Movie} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cinema.SeatInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cinema.SeatInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cinema.CinemaServicesClient.prototype.checkseat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cinema.CinemaServices/checkseat',
      request,
      metadata || {},
      methodDescriptor_CinemaServices_checkseat,
      callback);
};


/**
 * @param {!proto.cinema.Movie} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cinema.SeatInfo>}
 *     Promise that resolves to the response
 */
proto.cinema.CinemaServicesPromiseClient.prototype.checkseat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cinema.CinemaServices/checkseat',
      request,
      metadata || {},
      methodDescriptor_CinemaServices_checkseat);
};


module.exports = proto.cinema;

