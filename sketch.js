var rocket
var bg,bgimg
var asteroidsImg
var asteroidsGroup
var gameState="play"


function preload() {
 
  rocketImage=loadImage("Images/rocket.png")
  bgimg = loadImage("Images/milky way.jpg")
  asteroidsImg = loadImage("Images/asteroid.png")
  gameoverImg = loadImage("Images/game over.png")

}

function setup() {
  createCanvas(1000,600);

  asteroidsGroup= createGroup()

  bg = createSprite(200,200,1000,600);
  bg.addImage("bgimg", bgimg);
  bg.scale =0.28
 // bg.x = 0
  bg.velocityX=-4

  rocket=createSprite(100,300,50,20)
  rocket.addImage("rocket",rocketImage)
  rocket.scale=0.08

  gameover = createSprite(360,300,10,10)
  gameover.addImage(gameoverImg)
  gameover.scale = 0.1

}

function draw() {
  background("black");
if(gameState=== "play"){


  //if(bg.x < 0){

  // bg.x = bg.width/2

 // }

 gameover.visible=false


  if(keyDown("left")){

    rocket.x=rocket.x-2

  }

  if(keyDown("right")){

    rocket.x=rocket.x+2

  }

  if(keyDown("up")){

    rocket.y=rocket.y-2

  }

  if(keyDown("down")){

    rocket.y=rocket.y+2

  }

  if(rocket.isTouching(asteroidsGroup)){

    gameState="end"

  }
  Asteroids()
}
if(gameState==="end"){

  asteroidsGroup.destroyEach()
  gameover.visible=true


}
  drawSprites()
  
}


function Asteroids(){

if( frameCount %100 === 0){
  var rand = Math.round(random(200,600))
  var asteroids = createSprite(800,rand)
  asteroids.velocityX=-3
  asteroids.addImage("asteroids",asteroidsImg)
  asteroids.scale=0.3
  asteroidsGroup.add(asteroids)

  asteroids.lifetime = 250
}

}