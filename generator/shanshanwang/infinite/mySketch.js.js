// Infinate 2021 by Shanshan Wang
//disable mobile device native touch commands
function touchMoved() {
	return false;
  }
  
let noiseMax=1;
let sliderRandom,sliderAlpha;
let lineColor,bgColor;
let check,STOP;
let button,button2;

let phase=0;
let xoff=yoff=0;
let zoff=0;

let bgm;

OPC.slider('Radius',100, 10, 200, .1);
OPC.slider('Randomness', 5,0,10,0.1);
OPC.slider('Alpha', 5,0,50,0.1);

function preload() {
  bgm=loadSound('bgm.mp3');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  pg = createGraphics(4000, 4000);
  //sliderRandom=createSlider(0,10,5,0.1);
  //sliderAlpha=createSlider(0,200,5,0.1);
	
	check=createCheckbox("Stop Motion",false);
	check.style("font-family", "Comic Sans MS");
	check.style("color", "#999999");
	check.position(100,20);
	check.changed(myCheckedEvent);
	
  lineColor = createColorPicker('#ed225d');
	lineColor.style("font-family", "Comic Sans MS");
	lineColor.position(100,54);
	bgColor = createColorPicker('#000000');
	bgColor.style("font-family", "Comic Sans MS");
	bgColor.position(100,94);
	

	
	let p1 = createP('Color of Line');
	p1.style("font-family", "Comic Sans MS");
	p1.style("color",'#999999');
	p1.style('font-size', '14px');
	p1.position(160, 42);
	
	
	
	let p2 = createP('Color of Background');
	p2.style("font-family", "Comic Sans MS");
	p2.style('color','#999999')
	p2.style('font-size', '14px');
	p2.position(160, 76);
	
	let p3= createP('Press ⬇️ to Reset Background');
  p3.style("font-family", "Comic Sans MS");
	p3.style('color','#999999')
	p3.style('font-size', '10px');
	p3.position(160, 98);
  
	
	
	
  button=createButton("Reset");
	button.size(200,30);
	button.style("font-family", "Comic Sans MS");
	button.style("font-size", "18px");
	button.style('background-color', "#ffe5ed");
	button.style('boder',"0px");
	button.position(100,140);
  button.mousePressed(resetSketch);
	
  button2=createButton("Save Canvas");
	button2.size(200,30);
	button2.style("font-family", "Comic Sans MS");
	button2.style("font-size", "18px");
	button2.style('background-color', "#adbeff");
	button2.style('boder',"0px");
	button2.position(100,180);
  button2.mousePressed(Save);
	
  resetSketch();
	bgm.loop();
}



function resetSketch(){
  let bg=bgColor.color();
  background(bg);
}

function Save(){
	saveCanvas('myCanvas','jpg');
}


function draw() {
  //background(0);
  translate(width/2,height/2);
  let col=lineColor.color();
  col.setAlpha(Alpha);
  stroke(col);
	//strokeWeight(2);
  noFill();
  
  beginShape();
  noiseMax=Randomness;
  
  if(!STOP){
  for(let a=0;a<TWO_PI;a+=0.01){
    let xoff=map(cos(a+phase),-1,1,0,noiseMax);
    let yoff=map(sin(a+phase),-1,1,0,noiseMax);
    let r=map(noise(xoff,yoff,zoff),0,1,1*Radius,2*Radius);
    
    let x=r*cos(a);
    let y=r*sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
		
  zoff+=0.01;
}
	
}

function myCheckedEvent() {
  if (this.checked()) {
    STOP=true;
  } else {
    STOP=false;
  }
}

