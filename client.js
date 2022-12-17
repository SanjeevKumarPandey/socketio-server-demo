const net = require('net');

// Create a socket
const client = new net.Socket();

// Connect to the server
client.connect(8000, 'localhost', function() {
  console.log('Connected');
  // Send a message
  client.write('Hello, world!');
});

// Receive a response
client.on('data', function(data) {
  console.log('Received: ' + data);
});

// Handle errors
client.on('error', function(error) {
  console.error(error);
});

// Close the socket when the client closes the connection
client.on('close', function() {
  console.log('Connection closed');
});
