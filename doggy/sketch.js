

var input; 
var img; 


function setup() { 
  createCanvas(600, 600);
  input.position(200, 10);
  angleMode (DEGREES);

} 

function draw() {
  background(220);
  noStroke ();
  dogbody ();
    doghead();
  dogfeatues();
  dogpaws();

}

function dogbody () {
  //body
  fill (150, 80, 1);
  ellipse (300, 450, 230, 250); 
  fill (255);
  ellipse (300, 450, 130, 150); 
  
}
  
function doghead () {
    //head
  rotate(0);
  fill (226, 181, 129);
  ellipse (300, 300, 200, 200);
}

function dogfeatues () {
  //earL
  push();
  rotate(30);
  fill (150, 80, 1);
  ellipse (310, 130, 40, 120);
  pop();
  
//earR
  push();
  rotate(-30);
  fill (150, 80, 1);
  ellipse (210, 430, 40, 120);
  pop();
  
}


var input; 
var img; 


function setup() { 
  createCanvas(600, 600);
  angleMode (DEGREES);

} 

function draw() {
  background(220);
  noStroke ();
  dogbody ();
    doghead();
    if (img) { image(img, 210, 210, 180, 180); } 
  dogfeatues();
} 


function dogbody () {
  //body
  fill (150, 80, 1);
  ellipse (356, 460, 270, 280); 
  fill (255);
  ellipse (300, 450, 130, 150); 
  
}
  
function doghead () {
    //head
  rotate(0);
  fill (226, 181, 129);
  ellipse (300, 300, 200, 200);
}

function dogfeatues () {
  //earL
  push();
  rotate(30);
  fill (150, 80, 1);
  ellipse (320, 130, 40, 120);
  pop();

//earR
  push();
  rotate(-30);
  fill (150, 80, 1);
  ellipse (198, 430, 40, 120);
  pop();
}
function dogpaws () {
  //pawL
  push();
  rotate(50)
  fill (10, 0, 1);
  ellipse (50, 200, 20, 100)
    
  

}

