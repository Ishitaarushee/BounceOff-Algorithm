var fixedRect, movingRect, o1, o2;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400, 500,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  o1 = createSprite(200, 700, 50, 80);
  o1.shapeColor = "yellow";
  o1.debug = true;

  o2 = createSprite(200, 200, 50, 80);
  o2.shapeColor = "yellow";
  o2.debug = true;

  o1.velocityY = -5;
  o2.velocityY = +5;

  fixedRect.velocityY = +5;
  movingRect.velocityY = -5;
}

function draw() {
  background(0,0,0);  

 BounceOff(o1, o2);

 BounceOff(fixedRect, movingRect);
  drawSprites();
}
