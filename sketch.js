const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine, world;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;

function setup(){
    canvas = createCanvas(windowWidth/2, windowHeight/1.5);
    engine = Engine.create();
    world = engine.world;
    
    var canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    var options = {
        mouse : canvasmouse
    }
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);
    
    pendulum1 = new Pendulum(200, 450, "green");
    pendulum2 = new Pendulum(260, 450, "red");
    pendulum3 = new Pendulum(320, 450, "blue");
    pendulum4 = new Pendulum(380, 450, "orange");
    pendulum5 = new Pendulum(440, 450, "yellow");
    
    sling1 = new Sling(pendulum1.body, {x:200,y:200});
    sling2 = new Sling(pendulum2.body, {x:260,y:200});
    sling3 = new Sling(pendulum3.body, {x:320,y:200});
    sling4 = new Sling(pendulum4.body, {x:380,y:200});
    sling5 = new Sling(pendulum5.body, {x:440,y:200});
}

function draw(){
    background(180);
    Engine.update(engine);

    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();
}

function mouseDragged(){
        Matter.Body.setPosition(pendulum1.body, {x: mouseX , y: mouseY});
}

