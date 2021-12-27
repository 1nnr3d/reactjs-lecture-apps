const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
  console.log(socket.id, "Conntected user!");

  socket.on("server_msg", (msg) => {
    socket.broadcast.emit("client_msg", msg)
  })

  socket.on("disconnect", (reason) => {
    console.log(socket.id, "Disconnect user!", "Reason:", reason)
  })
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});