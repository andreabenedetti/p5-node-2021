const clientSocket = io();

clientSocket.on("connect", newConnection);

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("pink");
  circle(mouseX, mouseY, 50)
}

function newConnection() {
  console.log(clientSocket.id)
}