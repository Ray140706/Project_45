var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/bg1.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
buildingImg=loadImage("assets/obsBottom1.png")
buildingImg2=loadImage("assets/obsBottom3.png")
lampPostImg=loadImage("assets/obsBottom2.png")
birdImg=loadImage("assets/obsTop2.png")
}

function setup(){
createCanvas(1300,800)
//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.velocityX=-3
bg.scale = 1.1

//creating top and bottom grounds
bottomGround = createSprite(200,795,800,5);
bottomGround.visible = false;


topGround = createSprite(200,5,800,5);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.5;

buildingGroup=createGroup()
birdGroup=createGroup()



}

function draw() {
  
  background("black");
  if(bg.x<250){
    bg.x=bg.width/2
  }
        
          //making the hot air balloon jump
          if(keyDown("up")) {
          balloon.y = balloon.y-6 ;
            
          }
          if(keyDown("down")) {
            balloon.y = balloon.y+6 ;
              
            }

            balloon.collide(bottomGround)
            balloon.collide(topGround)

            buildings()
            birds()
          
          

          // //adding gravity
          //  balloon.velocityY = balloon.velocityY + 2;
   
        drawSprites();
        
}


function buildings(){
  if(frameCount%250===0){
  building=createSprite(1300,600,50,300)
  building.velocityX=-4
  building.lifetime=350
  var rand=Math.round(random(1,3))
  if(rand===1){
    building.addImage(buildingImg)
    building.scale=0.2

  }
  else if(rand===2){ 
    building.addImage(buildingImg2)
    building.scale=0.2
  }else{
    building.addImage(lampPostImg)
    building.scale=0.2

  }
  buildingGroup.add(building)
}
}
function birds(){
  if(frameCount%167===0){
    bird=createSprite(1300,300,10,10)
    bird.addImage(birdImg)
    bird.velocityX=-4
    bird.lifetime=350
    bird.scale=0.1
    bird.y=Math.round(random(80,350))
  }
  //birdGroup.add(bird)
}
