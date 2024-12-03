import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const port = process.env.PORT || 3000;

const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });

  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    socket.emit("chat message", msg);
  });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
