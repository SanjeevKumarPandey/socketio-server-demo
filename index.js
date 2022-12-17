const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer((req, res) => {
  // Handle HTTP requests here
});

const io = socketIO(server);

io.on('connection', socket => {
  socket.on('message', data => {
    console.log('Received message from client:', data);
    socket.emit('response', { message: 'Hello from the server!' });
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
