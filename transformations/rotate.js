let angle = 1;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  
  push(); // SAVE THE TRANSLATE STATE CHANGE
  
  translate(200,200);
  rotate(angle);

  fill(255, 100, 50);
  rectMode(CENTER); // Draw rectangle with it's center on the origin
  rect(0,0,100,50); // So the rectangle now rotate around it's center

  pop(); // CHANGES THE STATE BACK TO NORMAL - ORIGIN(0,0)

  translate(300,300);
  rotate(-angle);
  fill(50,100,50);
  rectMode(CENTER); 
  rect(0,0,100,50); 

  angle += 1;
  
}