function setup() {
  createCanvas(500, 500);
  background(255, 0, 0);  
}
 function draw() {
if (mouseIsPressed) {
  fill(random(255),random(255),random(255))
  }
   ellipse(mouseX, mouseY, 25, 25);
 }

