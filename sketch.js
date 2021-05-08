var starImg,bgImg,bgImg1;
var star,starImg1, starBody;
var start,startImg;
//create variable for fairy sprite and fairyImg
var fairy,fairyImg,fairyImg1;
var fairySound;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var PLAY=1
var SERVE=0
var gameState=SERVE

function preload()
{
	starImg = loadAnimation("images/starImage.png");
	starImg1=loadAnimation("images/star.png")

	bgImg = loadImage("images/starNight.png");
	bgImg1=loadImage("images/starryNight.jpg")
	//load animation for fairy here
	fairyImg=loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
	fairyImg1=loadAnimation("images/fairy.png")
	fairySound=loadSound("sound/JoyMusic.mp3")
	startImg=loadImage("images/start.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight-5);

	//write code to play fairyVoice sound
fairySound.play()
	//create fairy sprite and add animation for fairy
      fairy=createSprite(130,520)
	
	  fairy.scale=0.2

	star = createSprite(650,50);
	
	star.scale = 0.3;

start=createSprite(width/2,height/2+100)
start.addImage("start_button",startImg)
start.scale=0.5

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {


 

if(gameState==SERVE){
	background(bgImg1);
textSize(100)
textFont("Comic Sans Ms")
fill("pink")
stroke("blue")
strokeWeight(20)
text(`Fairy and Star`,width/2-300,height/2)
fairy.addAnimation("fairyFlying",fairyImg1)
star.addAnimation("star1",starImg1);

} else if (gameState==PLAY){
	background(bgImg)
	

	star.addAnimation("star1",starImg);
	star.changeAnimation("star1",starImg);
	star.scale=0.05
	
	star.x= starBody.position.x 
	star.y= starBody.position.y 
  
	
	console.log(star.y);
  
	//write code to stop star in the hand of fairy
	if(star.y>470 &&starBody.position.y>470&&gameState==PLAY){
	  Matter.Body.setStatic(starBody,true)
  }
}
if(mousePressedOver(start)&&gameState==SERVE){
	start.visible=false
	gameState=PLAY
	fairy.addAnimation("fairyFlying",fairyImg)
	fairy.changeAnimation("fairyFlying",fairyImg)
}
  drawSprites();
 
}

function keyPressed() {


	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right
	if(keyCode===RIGHT_ARROW){
		fairy.x=fairy.x+20
	}
	
	if(keyCode===LEFT_ARROW){
		fairy.x=fairy.x-20
	}
}
