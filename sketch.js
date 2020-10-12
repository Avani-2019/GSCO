function setup() 
{
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,80);
  wall = createSprite(1500,200,50,height/2);

  car.velocityX = speed;
  wall.shapeColor = "white";
}
var car,wall,speed,weight;

function draw() {
  background("black"); 
  
  if(wall.x - car.x < car.width/2 + wall.width/2)
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500
    if(deformation > 180)
      {
        car.shapeColor = "red";
      }

     else if(100 < deformation < 180)
     {
       car.shapeColor = "yellow";
     }
     
     else if(deformation < 100)
     {
       car.shapeColor = "green";
     }

  }

  
  drawSprites();
}


