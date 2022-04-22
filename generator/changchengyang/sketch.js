// 2021 Changcheng Yang
//disable mobile device native touch commands
function touchMoved() {
	return false;
  }

let IMG1;
let IMG3;
let mySoundGameOver;
let mySoundMusic;
let mySoundhit;
let x = 200;
let y = 200;
let a = 0;
let b = 0;
let directionX = 1;
let directionY = 2;
let level = 0;
let life = 3;
let points = 0;
let Switch1 = true;
let Switch2 = true;
let point = 0;

function preload(){
  
  IMG1 = loadImage('wssq.png')  
  IMG3 = loadImage('game over.png')
  // mySoundGameOver = loadSound('game over.mp3');
  // mySoundMusic = loadSound('bgm2.mp3');
  // mySoundhit = loadSound('hit back.mp3');
  Font1 = loadFont('KGHAPPY.ttf');
  
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER) 
  console.log('try not to be caught!');
}

function draw() {
  background(225,225,20,30);
  
  if(level == 0){                             
    if(Switch2 == true){
      // mySoundMusic.play();  
      Switch2 = false;
      }                                                      
    // point = millis() / 1000;                   
    textFont(Font1);  
    textSize(20);
    text('Your current point is:'+ point , 5, 40);
    fill(205, 0, 0);
    text('You have '+ life + ' chances left!',5,80);
  
if(keyIsPressed == true){
  
  if(mouseX=='left' & x >= 0){
    x = x - 10
  }
  if(mouseX=='right' & x<= width-50){
    x = x + 10;
  }
}    
  rect(mouseX, 300, 50, 20);
  // tint(255, 250, 60);
 

  
  
  a = a + directionX ;
  b = b + directionY ;
  image(IMG1,a,b,50,50)
 
  
  if(a > 400 || a < 0){
    directionX = directionX * -1; 
    // mySoundhit.play();
  }
  if(b <0  ){
    directionY = directionY * -1;
    // mySoundhit.play();
  }
  let d = dist(a, b, mouseX, 300);
  
  if(d<=40  ){
    directionY = directionY * -1;
    // mySoundhit.play(); 
    point = point+1;
    
    // text('Your current point is: \n' + ceil(point), 5, 40);
  }
    if(b>300){
      a=0;
      b=0;
  life=life-1
      // mySoundGameOver.play();
  }
    if(b>400){
      a=0;
      b=0;
    }
    if(life==0)
      {level=1;
      }
  }
    if(level == 1){
        image(IMG3,200,200,200,200);
        image.stop;
        if(Switch1 == true){
      // mySoundGameOver.play(); 
      Switch1 = false;
      }
    // mySoundMusic.stop();
        
    if(mouseIsPressed === true){ 
      level = 0;
      point = 0; 
      life = 3;                                                                     
      Switch1 = true;
      Switch2 = true;
    }
      }
      
  // if(b>300){
  // image(IMG3,200,200,200,200);
  // life=life-1
  // }
  }
