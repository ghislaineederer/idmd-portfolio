function setup() {
  createCanvas(500, 500);
  background(0, 0, 255);
}
function draw() {
  if(mouseIsPressed) {
    stroke(255, 255, 255);
    line(150, 150, mouseX, mouseY);
     fill(random(255),random(255),random(255))
    ellipse(mouseX,mouseY,20,20);
  }
}