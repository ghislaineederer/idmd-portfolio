var radius = 50;
var x = radius / 2

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('#0ca4f5');
  x += 1;
  if (x > width + radius) {
    x = 0 - radius;
  }
  fill(0, 0, 255);
  ellipse(x, height / 2, radius, radius);
}