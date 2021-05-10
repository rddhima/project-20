var canvas, bg;
var together;
var tom, tomimg1, tomimg2;
var jerry, jerryimg1, jerryimg2;

function preload(){
    bg=loadImage("garden.png");
    tomimg1=loadAnimation("tomOne.png");
    toming2=loadAnimation("tomTwo.png","tomThree.png");
    tomimg3=loadAnimation("tomFour.png");
    jerryimg1=loadAnimation("jerryOne.png");
    jerryimg2= loadAnimation("jerryTwo.png","jerryThree.png");
    jerryimg3=loadAnimation("jerryFour.png");
}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;
}

function draw() {
    background(bg);
    
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    } 

    drawSprites();
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}