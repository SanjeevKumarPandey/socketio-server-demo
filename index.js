// const app = require('express')();
// const server = require('http').createServer(app);
// const io = require('socket.io')(server);
const port = process.env.PORT || 3000;
// app.get('/', function(req, res, next) {
  // console.log(req.headers);
  // res.sendfile('index.html');
  // next();
// });

const net = require('net');

const serv = new net.Server();

// Receive a response
serv.on('data', function(data) {
  console.log('Received: ' + data);
});

// Handle errors
serv.on('error', function(error) {
  console.error('Error: ' + error);
});

// Close the socket when the client closes the connection
serv.on('close', function() {
  console.log('Connection closed');
});

serv.on('connection', () => {
  console.log('user connected');  
});

serv.on('disconnection', () => {
  console.log('user disconnected');  
});

serv.on('message', data => {
  console.log('Received message from client:', data);
  serv.emit('response', { message: 'Hello from the server!' });
});

serv.listen(port);