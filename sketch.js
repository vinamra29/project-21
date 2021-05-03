var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";
    block3 = createSprite(500,580,200,30)
    block3.shapeColor = "green";
    block4 = createSprite(705,580,200,30)
    block4.shapeColor = "red";
    //create two more blocks i.e. block3 and block4 here
    
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX = 0
    ball.velocityY = 0
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    if(keyDown("space")){
        ball.velocityX = 5
        ball.velocityY = 5
    }
    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball)){
         ball.bounceOff(block1)
        ball.shapeColor = "blue";
       
    }



    if(block2.isTouching(ball)){
        ball.bounceOff(block2)
        ball.shapeColor = "orange";
   
    }
    if(block3.isTouching(ball)){
        ball.bounceOff(block3)
        ball.shapeColor = "green";
   
    }
    if(block4.isTouching(ball)){
        ball.bounceOff(block4)
        ball.shapeColor = "red";
   
    }

    //write code to bounce off ball from the block3
  

    //write code to bounce off ball from the block4

    drawSprites();
}
