//
// Cross-Hash-Example-Code
//
function setup() {
  createCanvas(400, 400);
  strokeWeight(4);
}
function draw() {
  background(204);
  for (i = 10; i < mouseX; i += 8) {
    for (j = 10; j < mouseY; j += 8) {
      line(i, 0, i, 390);
      line(0, j, 390, j);
    }
  }
}