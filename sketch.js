

var hasDocked=false

function preload(){
  issImg=loadImage("Images/iss.png")
  spacebg=loadImage("Images/spacebg.jpg")
  spacecraft1=loadImage("Images/spacecraft1.png")
  spacecraft2=loadImage("Images/spacecraft1.png")
  spacecraft3=loadImage("Images/spacecraft1.png")
  spacecraft4=loadImage("Images/spacecraft1.png")
}


function setup() {
  createCanvas(600,350);
  spacecraft=createSprite(285, 240, 50, 50);
  spacecraft.addImage(spacecraft1)
  spacecraft.scale=0.15
  iss=createSprite(330,130)
  iss.addImage(issImg)
  iss.scale=0.5
}

function draw() {
  background(spacebg);
  spacecraft.addImage(spacecraft1)
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1)
    if(keyDown(UP_ARROW)){
      spacecraft.y=spacecraft.y-3
    }
    if(keyDown(LEFT_ARROW)){
      spacecraft.x=spacecraft.x-1
      spacecraft.addImage(spacecraft3)
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.x=spacecraft.x+1
      spacecraft.addImage(spacecraft4)
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(spacecraft2)
    }
  }
  if(spacecraft.y<=(iss.y+10)&&spacecraft.x<=(iss.x+40)){
    hasDocked=true
    textSize(25)
    fill(255)
    text("DOCKING SUCCESSGFUL!!!!!!!!!!!!!!!!!!", 200,300)
  }

  drawSprites();
}