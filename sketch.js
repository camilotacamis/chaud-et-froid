let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background("purple");
  x = x + random(-2,2);
  y = y + random(-2,2);
  x = constrain(x,0,400);
  y = constrain(y,0,400);
  let distancia;
  distancia = dist(mouseX, mouseY, x, y);
  fill("pink")
  circle(mouseX, mouseY, distancia);
  //circle(x, y, 10);

  if (distancia < 5) {
    textSize(30)
    textAlign(CENTER)
    text("its nice, its so nice!", 200, 200);
    noLoop();
  }
}
