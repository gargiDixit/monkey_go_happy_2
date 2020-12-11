
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,500);
  monkey=createSprite(100,380,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2;
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
  
  ground=createSprite(300,440,600,10);
  //ground.shapeColor=("orange");
  
}


function draw() {
 
background("white");
  ground.velocityX=-3;
  if(ground.x<300){
    ground.x=ground.width/2;
  }
  survivalTime=survivalTime+Math.round(getFrameRate()/60);
  textSize(30);
  fill("brown");
  stroke("brown");
  text("Survival Time: "+ survivalTime, 200,50);
  
  
  
  monkey.collide(ground);
  if(keyDown("space")){
    monkey.velocityY=-12;
    
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
  bananaSprite();
  obstacleSprite();
  drawSprites(); 
}

function bananaSprite(){
  if(frameCount%80===0){
    banana=createSprite(600,120,10,10);
    banana.y=Math.round(random(50,300));
    banana.addImage(bananaImage);
    banana.scale=0.1
    banana.velocityX=-4;
    banana.lifetime=150;
    banana
  }
  
}
function obstacleSprite(){
  if(frameCount%120===0){
    obstacle=createSprite(600,400,10,10);
    obstacle.y=Math.round(random(397,397));
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-4;
    obstacle.lifetime=150;
    obstacleGroup.add(obstacle);
  }
}




