//
//Mouse lines Code Extract
//
function setup() {
  createCanvas(400, 400);
  strokeWeight(4);
}
function draw() {
  background(255);
  for(i = 17; i < mouseY; i = i + 22){
    line(0, i, mouseX, mouseY);
  }
}
