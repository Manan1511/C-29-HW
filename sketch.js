const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;






var slingshot1;
function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    polygon = Bodies.circle(50,200,50   ,{mass: 30000, friction: 1, density:3000});
    World.add(world,polygon);

    slingshot1 = new SlingShot(polygon,{x:100,y:200})
    

    ground1 = new Ground(500,515,215,10)
    //bottom
    block17 = new Box(610,275,30,40);
    block18 = new Box(640,275,30,40);
    block19 = new Box(670,275,30,40);
    block20 = new Box(700,275,30,40);
    block21 = new Box(730,275,30,40);
    block22 = new Box(760,275,30,40);
    block23 = new Box(793,275,30,40);
    //layer-2
    block24 = new Box(640,235,30,40);
    block25 = new Box(670,235,30,40);
    block26 = new Box(700,235,30,40);
    block27 = new Box(730,235,30,40);
    block28 = new Box(760,235,30,40);
    //layer-3
    block29 = new Box(670,195,30,40);
    block30 = new Box(700,195,30,40);
    block31 = new Box(730,195,30,40);
    //top
    block32 = new Box(700,155,30,40);

    ground2 = new Ground(700,315,210,10)
    //bottom
    block1 = new Box(410,475,30,40);
    block2 = new Box(440,475,30,40);
    block3 = new Box(470,475,30,40);
    block4 = new Box(500,475,30,40);
    block5 = new Box(530,475,30,40);
    block6 = new Box(560,475,30,40);
    block7 = new Box(590,475,30,40);
    //layer-2
    block8 = new Box(440,435,30,40);
    block9 = new Box(470,435,30,40);
    block10 = new Box(500,435,30,40);
    block11 = new Box(530,435,30,40);
    block12 = new Box(560,435,30,40);
    //layer-3
    block13 = new Box(470,395,30,40);
    block14 = new Box(500,395,30,40);
    block15 = new Box(530,395,30,40);
    //top
    block16 = new Box(500,355,30,40);
}

function draw(){
    background("black");
    Engine.update(engine);
    ground2.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    ground1.display();
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
    block14.display();
    block15.display();
    block16.display();

    slingshot1.display();

    imageMode(CENTER)
    image(polygonImg, polygon.position.x, polygon.position.y, 75, 75);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot1.fly();
}