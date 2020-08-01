var bullets , wall ;
var speed , weight;
var Damage;

function setup() {
createCanvas(1600,400);

speed = random(55,90);
weight = random (400,1500);

wall = createSprite (1200 , 200, 60 ,height/2 );
wall.shapeColor = "white";

bullets = createSprite(50, 200, 25, 10);
  bullets.shapeColor = "black";
  bullets.debug = false;
  bullets.velocityX = speed;




}
function draw (){
  background(0);
  if (wall.x - bullets.x<( bullets.width + wall.width )/2){
  bullets.velocityX = 0   ;
  var  Damage = 0.5 * weight * speed * speed /22500;
   console.log (Damage);
  if (Damage >180){
    wall.shapeColor = color(255,0,0);
  }
  if (Damage <180 && Damage>100){
    wall.shapeColor = color(230,230,0);
  }
  if (Damage <100){
    wall.shapeColor = color(0,255,0);
  }
  }
     drawSprites();
}