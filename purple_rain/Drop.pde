class Drop {
  float x = random(width);
  float y = random(-500,-100);
  float z = random(0, 20);
  
  float dropLength = map(z, 0, 20, 10, 20);
  float ySpeed = map(z, 0, 20, 4, 10);
  
  void fall() {
    y = y + ySpeed;
    ySpeed += 0.02;
    
    if(y > height) {
      y = random(-200, -100);
      ySpeed = map(z, 0, 20, 4, 10);
    }
  }
  
  void show() {
    float thick = map(z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(138, 43, 226);
    line(x,y,x,y+dropLength);
  }
}
