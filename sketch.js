

var ball;

function setup() {
  createCanvas(500,500);
    ball = createSprite(250, 250, 50, 50);
}

function draw() 
{
  background(200);

  if (keyIsDown(RIGHT_ARROW)) {

    ball.position.x += 2
  }

  if (keyIsDown(LEFT_ARROW)){

    ball.x += -2
  }

  if (keyIsDown(UP_ARROW)) {
    
    ball.y += -2
  }

  if (keyIsDown(DOWN_ARROW)) {

    ball.y += 2
  }

  drawSprites()

}



