function recursiveCircle(x, y, dia) {
  stroke(0);
  noFill();
  ellipse(x, y, dia, dia);
  if (dia >= 2) {
    recursiveCircle(x+dia/4, y, dia / 4);
    recursiveCircle(x-dia/4, y, dia / 4);
    recursiveCircle(x, y+dia/4, dia / 4);  //Sierpinski triangle
    //recursiveCircle(x, y-dia/2, dia / 2);
  }
}

function setup() {
  createCanvas(700, 700);
  recursiveCircle(width / 4, height / 4, 500);
}

function draw() {
  //background(500);
}