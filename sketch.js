var wall, thickness

var bullet, speed, weight;


function setup()
{
  createCanvas(1600,400);
  
    speed=random(223,321);
    weight=random(30,52);

  bullet=createSprite(50, 200, 30, 10);
  bullet.velocityX = speed;
  bullet.shapeColor=color("white");

  thickness=random(22,83);
  

  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);

}
function draw() 
{
  background(0);  
  if (wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    bullet.x = wall.x - (bullet.width+wall.width)/2
    var damage=0.5 * weight * speed * speed/ (thickness**3);
    textSize(20);
    text("damage="+damage, 800, 50);
    if(damage<10)
    {
      wall.shapeColor=color("green");
    }
    if (damage>10)
    {
      wall.shapeColor=color("red");
    }
  }
  drawSprites();
}