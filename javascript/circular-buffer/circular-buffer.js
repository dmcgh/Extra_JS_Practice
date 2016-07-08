var circularBuffer = function() {};

CircularBuffer.prototype.read = function() {

}

module.exports = CircularBuffer;

var bufferEmptyException = function() {};

bufferEmptyException.prototype.test = function() {}

module.exports = bufferEmptyException;

var bufferFullException = function() {};

bufferFullException.prototype.test = function() {}

module.exports = {bufferFullException, bufferEmptyException, circularBuffer:new circularBuffer};
