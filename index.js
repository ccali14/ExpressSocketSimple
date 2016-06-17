const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const yosay = require('yosay');


io.on('connection', (socket) => {
  socket.on('test', async(msg) => {
    console.log(msg);
    io.emit('test', `${msg} emit`);
  });
});


http.listen(3000, async() => {
  console.log(yosay('Proccess started on *:3000'));
});
