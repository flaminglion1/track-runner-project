var track,trackImage;
var runner, runnerImage;
var hurdle,hurdleImage,hurdlrGroup;
var iv;
var go,goi;


function preload(){
trackImage=loadImage("track.jpg");
  runnerImage=loadImage("runner.png")
  hurdleImage=loadImage("hurdle.jpg")
  goi=loadImage("gameover1.png")
  
}

function setup() {
 createCanvas(500,500);
  
  track=createSprite(200,250)
  track.addImage(trackImage);
  track.velocityX=6
            
  iv = createSprite(250,375,500,10)
  iv.visible = false;
  
  runner=createSprite(400,300);
  runner.addImage(runnerImage);
  runner.scale = 0.25

  go=createSprite(250,250);
  go.addImage(goi);
  go.scale = 0.4;
  go.visible = false;
  
hurdleGroup = new Group();
}

function draw() {
 background("cyan");
  if(track.x >310){
    track.x = 200;
  }
  if(keyDown("space")&& runner.y >= 100) {
        runner.velocityY = -18;
  }
   runner.velocityY = runner.velocityY + 0.8
  if(runner.isTouching(iv)){
    runner.y = 300
    
  }
 if(runner.isTouching(hurdleGroup)){
   track.velocityX=0;
   hurdleGroup.velocityX=0;
   runner.velocityX=0;
   go.visible = true;
 hurdle.visible= false;
 }
  hurd()
  drawSprites();
}

function hurd(){
  if(frameCount%200 === 0){
  hurdle=createSprite(10,310);
  hurdle.addImage(hurdleImage);
  hurdle.scale = 0.3
    hurdle.velocityX = 18
 hurdleGroup.add(hurdle);
  }
}

