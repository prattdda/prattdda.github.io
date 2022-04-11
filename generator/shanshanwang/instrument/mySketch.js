let monoSynth;
let note,velocity,time,dur;
let area=0;

let s;
let swi=0;
let once=new Array();

var x=y=0;
var i=j=0;
var a=0;
var aSpeed=0.08;
var freq=6;
var amp=3;

let r,c,row,col;

function setup() {
  createCanvas(520, 400);
  monoSynth=new p5.MonoSynth();
  rectMode(CENTER);
  for(var q=0;q<4;q++)
    {
      once[q]=new Array();
      for(var p=0;p<7;p++)
        once[q][p]=true;
    }
}

function draw() {
  background(255, 56, 149,20);
  
  for(var k=1;k<5;k++){
    for(var n=1;n<8;n++){ 

     if(n<=4){
      wave(50+(110-10*n)*(n-1),-50+100*k,100-20*n,k,n);
     }
      else{
      wave(470+(10*n+30)*(n-7),-50+100*k,20*n-60,k,n); 
      }
      
    }
  }
  //circle

  
  /*
  wave(50,80,80,2);
  wave(140,80,60,2);
  wave(210,80,40,3);
  wave(260,80,20,3);
  wave(310,80,40,2);
  wave(380,80,60,2);
  wave(470,80,80,2);
  */
}

function wave(i,j,s,r,c){

   //console.log(once);
  
  push();
  let dis=dist(i,j,mouseX,mouseY);
  row=r;
  col=c;
  translate(i,j);
  
  if(dis<s/2){
    
    if(once[row-1][col-1]){
    PlaySynth();
    once[row-1][col-1]=false;
     }//play 
    
    
    x=(s/2+sin(a*freq)*amp)*sin(a);
    y=(s/2+sin(a*freq)*amp)*cos(a);
    push();
    fill(55, 250, 243);
    noStroke();
    ellipse(0,0,s-4);
    ellipse(x,y,8);
    pop();
    a+=aSpeed;
    
    
    
  }//in area
  
  else{
    once[row-1][col-1]=true;
    area=0;
    
    stroke(55, 250, 243);
    strokeWeight(6);
    noFill();
    ellipse(0,0,s);
  }//out of area

  pop();
}

function PlaySynth(){
  userStartAudio();
  
  velocity = .3;
  time = 0;
  dur = 1;
  
  switch(row){
    case 1:
      switch(col){
    case 1:
      note='A7';
      break;
      
    case 2:
      note='A6';
      break;
      
    case 3:
      note='A5';
      break;
    
    case 4:
      note='A4';
      break;
      
    case 5:
      note='A3';
      break;
      
    case 6:
      note='A2';
      break;
    case 7:
      note='A1';
      break;
      
    case 0:
      note='A1';
      velocity=0;
      break;
  }break;
    case 2:
      switch(col){
    case 1:
      note='B7';
      break;
      
    case 2:
      note='B6';
      break;
      
    case 3:
      note='B5';
      break;
    
    case 4:
      note='B4';
      break;
      
    case 5:
      note='B3';
      break;
      
    case 6:
      note='B2';
      break;
    case 7:
      note='B1';
      break;
      
    case 0:
      note='A1';
      velocity=0;
      break;
  }break;
    case 3:
      switch(col){
    case 1:
      note='C7';
      break;
      
    case 2:
      note='C6';
      break;
      
    case 3:
      note='C5';
      break;
    
    case 4:
      note='C4';
      break;
      
    case 5:
      note='C3';
      break;
      
    case 6:
      note='C2';
      break;
    case 7:
      note='C1';
      break;
      
    case 0:
      note='A1';
      velocity=0;
      break;
  }break;
    case 4:
      switch(col){
    case 1:
      note='D7';
      break;
      
    case 2:
      note='D6';
      break;
      
    case 3:
      note='D5';
      break;
    
    case 4:
      note='D4';
      break;
      
    case 5:
      note='D3';
      break;
      
    case 6:
      note='D2';
      break;
    case 7:
      note='D1';
      break;
      
    case 0:
      note='A1';
      velocity=0;
      break;
  }break;
      
  }
  //console.log(row,col,note);

  
  monoSynth.play(note, velocity, time, dur);
  
}