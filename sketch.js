const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2
var ground1
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
box1=new box(200,200,20,20);
box2=new box(200,150,20,20);
 ground1= new ground  (200,200,400,10) 
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground1.display();
    
   
}