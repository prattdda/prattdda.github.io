
//Worm Drawing 2021, by Shanshan Wang 
function touchMoved() {
	return false;
  }
/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling
 * the page.
 */
document.ontouchmove = function(event) {
  event.preventDefault();
};
let r,g,b;
let button;
let bugs = [];
let numBugs = 40;
let a=0;
let val;
let instructions;

function setup() {
  createCanvas(displayWidth, displayHeight);
  noStroke();
  button = createButton('Change Background');
  button.position(10, 10);
  button.mousePressed(changeBG);
  val=color(0,0,0);
  instructions = createElement('h3', "tap / click to draw!!");
  instructions.position(windowWidth / 2, 10);
  button.elt.style.borderRadius = "50px"
  button.elt.style.padding = "3vw"
  button.elt.style.backgroundColor = "lightgrey"
  button.elt.style.color = "50px";
  button.style("font-family", "Comic Sans MS")
 
}


function mousePressed(){
    let x = mouseX;
    let y = mouseY;
    let radius = random(5, 25);
  	let b = new Bug(x, y, radius);
   	bugs.push( b );
}

function changeBG() {
  if(a)
  {val = color(255,255,255);
  a=0;
  instructions.elt.style.color = "black";
}
  else
   { val=color(0,0,0);
  a=1;
  instructions.elt.style.color = "white";
  }
  background(val);

}

function draw() {
  fill(255);
  //background(255);
  for(let bug of bugs){
   	bug.move();
    bug.show();
  }
  
}

class Bug{
  constructor(tempX, tempY, tempR) {
    this.x = tempX;
    this.y = tempY;
    this.radius = tempR;
  }

  show() {
    r=map(this.x,0,400,0,255);
    g=map(this.x,0,400,255,0);
    b=map(this.y,0,400,255,0);
  
    fill(r,g,b);
    ellipse(this.x, this.y, this.radius);
  }

  move() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }

}

