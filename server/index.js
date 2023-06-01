const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const server = http.createServer(app);
const { Server } = require("socket.io");
app.use(cors());

const io = new Server(server, {
  cors: "http://localhost:5173",
});

io.on("connection", (socket) => {
  console.log("User connected: ", socket.id);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    console.log(data);
    socket.broadcast.emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnect: ", socket.id);
  });
});

server.listen(3001, () => {
  console.log("server running");
});
