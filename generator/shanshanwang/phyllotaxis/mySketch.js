var x=y=0;
var r=25;
var a=0;
var aSpeed=0.003;
var swi=1;

var freq=8;
var amp=17;

var n=0;
var c=3;
var Radius,Angle;

var i=0;
var b=160;
var bg=1;

function setup() {
  createCanvas(400,400);
  noStroke();
  //angleMode(DEGREES);
  
  button = createButton('Change Background');
  button.position(10, 10);
  val=color(0);
  background(val);
  button.mousePressed(changeBG);
}


function changeBG() {
  if(bg)
  {val = color(255,255,255);
  bg=0;}
  else
   { val=color(0,0,0);
  bg=1;
  }
  background(val);
}


function draw() {
  
  translate(width/2,height/2);
  
  fill(255, 137, 59);
  x=(b+sin(a*8)*10)*sin(a);
  y=(b+sin(a*8)*10)*cos(a);
  ellipse(x,y,2);
 //console.log(b);
  if(b>200){
    b=160;
  }
  //outer line
  
  
  push();
  Angle=137.5*n;
  Radius=c*sqrt(n);
  rotate(frameCount*0.01);
  colorMode(HSB);
  fill(Angle%256,100,255);
 ellipse(Radius*sin(Angle),Radius*cos(Angle),4-n/150);
  n++;
  if(n>=600){
    n=0;
  }
  //console.log(n);
  pop();
  //inside spiral
 
  
  
  
  for(var i=0;i<=8;i++){
    //console.log(i);
    push();
  translate(120*sin((PI/4)*i),120*cos((PI/4)*i));
  
  
  if(swi){
  //fill(255, 137, 59);
    fill(230, 62, 32);
    }
  else{
    fill(38, 103, 255);
  }
  if(a<=2*PI){
  x=(r+sin(a*freq)*amp)*sin(a);
  y=(r+sin(a*freq)*amp)*cos(a);
  ellipse(x,y,2);
  a+=aSpeed;
  }
  
  else{
    a=0;
    swi=swi?0:1;
    r+=10;
    amp-=3; 
    b=b+10;
  }

  if(amp<=5)
  {amp=17;
   r=25;
   n=0;
  }
  //line
    pop();
  }
}

function keyPressed(){
   if(key=='s'){
    saveCanvas('Phyllotaxis', 'png');
     }
}