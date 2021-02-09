const mw = Matter.World;
const me = Matter.Engine;
const mb = Matter.Bodies;
var b1, b2;

var engine, world;
var g;

function setup() {
  createCanvas(400,400);
  engine = me.create();
  world = engine.world;
  b1 = new box(200, 300, 50, 50);
  b2 = new box(240, 100, 50, 100);
  g = new ground(200, 390, 400, 20);
}
  

function draw() {
  background("orange");
  me.update(engine);  
  b1.display();
  b2.display();
  g.display();
}



