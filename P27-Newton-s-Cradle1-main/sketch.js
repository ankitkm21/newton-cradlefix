
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof1;


var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bobObject1 = new bob(250,400,100);
  //   bobDiameter=40;
  //   startBobPositionX=width/2;
	// startBobPositionY=height/4+500;
  //   bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
    // bobObject2 = new bob(350,400,100);
    // bobObject3 = new bob(450,400,100);
    // bobObject4 = new bob(550,400,100);
    // bobObject5 = new bob(650,400,100);

    roof1 = new roof(450,100,500,20);

    // rope3 = new rope(bobObject3.body,roof1.body,0,0);
    // rope2 = new rope(bobObject2.body,roof1.body,-100,0);
    rope1 = new rope(bobObject1.body,roof1.body,-200,0);
    // rope4 = new rope(bobObject4.body,roof1.body,100,0);
    // rope5 = new rope(bobObject5.body,roof1.body,200,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
	
  bobObject1.display();
  // bobObject2.display();
  // bobObject3.display();
  // bobObject4.display();
  // bobObject5.display();

  roof1.display();

  rope1.display();
  // rope2.display();
  // rope3.display();
  // rope4.display();
  // rope5.display();
  
  // drawSprites();
 
}

function keyPressed(){
  console.log("PRint")
  if(keyCode===UP_ARROW){

Matter.Body.applyForce (bobObject1.body,bobObject1.body.position,{x:-0.1,y:0.1}

)
}
}



