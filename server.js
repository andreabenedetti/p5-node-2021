console.log("Starting server.js");

let express = require("express");
let serverSocket = require("socket.io");

let app = express();
let port = 3000;
let server = app.listen(port);
let io = serverSocket(server);

console.log(`Server is running on http://localhost:${port}`);

app.use(express.static("public"));
io.on("connection", newConnection);

function newConnection(newSocket) {
    console.log("New connection: ", newSocket.id);
}