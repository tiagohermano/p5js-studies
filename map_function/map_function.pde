// Change color as the mouse move in the 'X' axis

void setup() {
  size(600,400);
}

void draw() {
  // Map 'mouseX' value from 0->600 to 0->255
  // Which defines the background color from black(left) to white(right)
  float col = map(mouseX, 0, 600, 0, 255);
  background(col);
}
