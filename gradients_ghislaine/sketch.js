//
//Gradients Code Example
//
function setup() {
  createCanvas(600, 600);
  var w = width;
  while (w > 0) {
    stroke(random(0,255),random(0,255),random(0,255));
    grad = map(w, 0, width, 0, 255)
    print(grad);
    fill(grad);
   rect(width / 4, height / 6, w, w);
    w = w - 20;
  }
}
function draw() {
}

