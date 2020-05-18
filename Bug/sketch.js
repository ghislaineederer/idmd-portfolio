let bug;

function setup() {
  createCanvas(450, 130);
  background(204);
  // Create object and pass in parameters
  bug = new JitterBug(width/5, height/4, 200);
}

function draw() {
  background(2);
  bug.move();
  bug.display();
}

function JitterBug(xpos, ypos, dia) {
  this.xpos = xpos;
  this.ypos = ypos;
  this.dia = dia;
  this.speed = 15;
  
  this.move = function() {
    this.xpos += random(-this.speed, this.speed);
    this.ypos += random(-this.speed, this.speed);
  }
  
  this.display = function() {
    ellipse(this.xpos, this.ypos, this.dia, this.dia);
  }
}