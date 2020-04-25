const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform;
var block;
var ball, slingshot;
var gameState = "onShooter";



function setup() {
createCanvas(600,400);
engine = Engine.create();
 world = engine.world;

platform=new Platform(400,150,120,10);
//platform1=new Platform(250,370,80,10);

platform3=new Platform(370,70,90,10);

block=new Block(400,140,10,10);
block1=new Block(410,140,10,10);
block2=new Block(440,140,10,10);
block3=new Block(430,140,10,10);
block4=new Block(440,140,10,10);
block5=new Block(410,130,10,10);
block6=new Block(400,130,30,10);
block7=new Block(450,140,40,10);
block8=new Block(450,140,30,10);
block9=new Block(390,45,20,20);
block10=new Block(390,35,20,20);
block11=new Block(400,45,20,20);
block12=new Block(400,35,20,20);
block13=new Block(395,25,10,10);
ball=new Ball(150,280,20);
slingshot = new SlingShot(ball.body,{x:150, y:280});
}

function draw() {
 background("orange");  
 Engine.update(engine);
platform.display();
//platform1.display();

platform3.display();
block.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
ball.display();
slingshot.display();

}

function mouseDragged(){
    if (gameState!=="inAir"){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
}

function mouseReleased(){
    slingshot.fly();
    gameState = "inAir";
}
 
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(ball.body);
        gameState="onSho0ter"
    }
}
