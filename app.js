import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const port = process.env.PORT || 3000;
app.use(express.static("public"));

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
