const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin1, paperObject,groundObject;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1270, 570);
		
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(300,470,70);
	groundObject=new Ground(width/2,560,width,20);
	dustbin1=new Dustbin(1150,550);
	
	 


	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("white");
 
 
  paperObject.display();
  groundObject.display();
  dustbin1.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

  
	}
}

