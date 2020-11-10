const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;
var paper1;
var dustbin1, dustbin2,dustbin3;
var ground;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
  //Create the Bodies Here.
  ground = new Ground(400, 650, 800, 20);
  paper1 = new paper(150, 10);
  dustbin1 = new dustbin(600,630,180,20);
}


function draw() {
  //circleMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  paper1.display();
  drawSprites();
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body, paper1.body.Position,{x:85, y:-85});
  }
}

