
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plain;
var ball1,ball2,ball3,ball4,ball5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	plain = Bodies.rectangle(400,100,500,20);
	//Create the Bodies Here.
	ball1 = new Bob(200,500);
	ball2 = new Bob(300,500)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("red");
  rectMode(CENTER);
  rect(plain.position.x,plain.position.y,500,20);

  ball1.display();
  ball2.display();
  drawSprites();
 
}



