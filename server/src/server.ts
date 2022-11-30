const express = require("express");
const {createServer} = require("http");
const {Server} = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

app.get("/user", (request, response) => response.send("1111ppp"));

const users = [];

io.on("connection", (socket) => {
  socket.on("ROOM:JOIN", (userData) => {
    users.push(userData);

    socket.broadcast.emit("ROOM:GET_ROOMS", users);
  });

  socket.on("disconnect", () => {
    console.log(socket.id + " Ушел"); // false
  });
});

httpServer.listen(5000, () => console.log("server started on 5000"));
