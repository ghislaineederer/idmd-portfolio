//
//Concentric Circles Code Extract
//
function setup() {
  createCanvas(400, 400);
  background(120)
  noFill();
  for(d = 10; d < width; d = d + 10){
    r=random(0,255);
    g=random(0,255);
    b=random(0,255);
    stroke(r,g,b);
    ellipse(width / 2, height / 2, d, d);
  }
}