const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState = "ready";
var y,j
var score = 0;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1100,700);

     j= new Date();
     y= j.getHours()
    

    engine = Engine.create();
    world = engine.world;


    //ground = new Ground(550,690,11000,20);
    platform = new Ground(500, 400, 300, 10);
    platform2=new Ground(900,250,200,10)
    hex=new Hex(100,400)
    box1=new Box(500,300,"blue")
    box2=new Box(540,300,"blue")
    box3=new Box(460,300,"blue")
    box4=new Box(580,300,"blue")
    box5=new Box(420,300,"blue")
    box6=new Box(380,300,"blue")
    box7=new Box(620,300,"blue")

    box11=new Box(500,250,"lightblue")
    box12=new Box(540,250,"lightblue")
    box13=new Box(460,250,"lightblue")
    box14=new Box(580,250,"lightblue")
    box15=new Box(420,250,"lightblue")
    

    box21=new Box(500,200,"blue")
    box22=new Box(540,200,"blue")
    box23=new Box(460,200,"blue")

    boxalpha1=new Box(500,150,"lightblue")

    box31=new Box(900,120,"blue")
    box32=new Box(940,120,"blue")
    box33=new Box(860,120,"blue")
    box34=new Box(980,120,"blue")
    box35=new Box(820,120,"blue")

    box41=new Box(900,70,"lightblue")
    box42=new Box(940,70,"lightblue")
    box43=new Box(860,70,"lightblue")

    boxalpha2=new Box(900,20,"blue")

    slingshot = new SlingShot(hex.body,{x:100, y:400});
}

function draw(){
    if(y < 6){
        background("black")
    }
    if(y > 6){
        background("orange")
    }
    fill("red")
    textSize(30)
    text("Score="+score,800,50)
        if(gameState==="launched"){
            text("press <SPACE> to retry",200,50)
        }
    
        
    Engine.update(engine);

      platform.display()
      platform2.display();
      hex.display()
      box1.display()
      box1.score();
      box2.display();
      box2.score();
      box3.display();
      box3.score();
      box4.display();
      box4.score();
      box5.display();
      box5.score();
      box6.display();
      box6.score();
      box7.display();
      box7.score();

      box11.display()
      box11.score();
      box12.display()
      box12.score();
      box13.display()
      box13.score();
      box14.display()
      box14.score();
      box15.display()
      box15.score();
       box21.display()
       box21.score();
       box22.display()
       box22.score();
       box23.display()
       box23.score();
       boxalpha1.display();
       boxalpha1.score();

       box31.display();
       box31.score();
       box32.display();
       box32.score();
       box33.display();
       box33.score();
       box34.display();
       box34.score();
       box35.display();
       box35.score();

       box41.display();
       box41.score();
       box42.display();
       box42.score();
       box43.display();
       box43.score();

       boxalpha2.display();
       boxalpha2.score();

      slingshot.display();

}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32  ){
       slingshot.attach(hex.body);
       Matter.Body.setPosition(hex.body,{x:100,y:400})
       gameState="ready"
    }
}

