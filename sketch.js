
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var engine,world;
var leftPillar,mainPillar,rightPillar;


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		restitution:0.3,
		isStatic:false,
		friction:0.5,
		density:1.3
		
	}
	var groundOptions={
		isStatic:true
	}

	ground=Bodies.rectangle(600,370,1200,20,groundOptions);
	World.add(world,ground);
	ball=new Paper(50,345,15,ball_options);
	
	
	trashPillar= new Trash(1200,350,100,100);
	
	Engine.run(engine);
	

	
}


function draw() {
  rectMode(CENTER);
  background(250);
  Engine.update(engine);
 
  rect(ground.position.x,ground.position.y,1200,20);
  
  
 

 ball.display();
 trashPillar.display();
 
keyPressed();
}



function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:25,y:-25});
	}
}
