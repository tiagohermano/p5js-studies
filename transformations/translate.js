function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);
  
  //rect(50,50,100,50); // Rectangle. Arguments(x, y, width, height)

  translate(50, 50); // Changes origin point from (0,0) to (50,50)
  
  fill(255);
  rect(0,0,100,50); // Does the same thing as the first commented declared retangle on line 8
}