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
let IMG;

function preload() {
  IMG = loadImage("cloud.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220, 249, 243);
  image(IMG, mouseX,mouseY,300,150);
  push(); 
  if(mouseY<=150){
    fill(255, 173, 5);
    noStroke();
    ellipse(300,300,300,300);
  }
  noFill();
  stroke(103, 114, 121);
  
  for (let y = 10; y < 100; y++) {
    for (let x = 0; x < 100; x++) {
      hexagon(
        (x / 26) * 600,
        (x % 2 === 0 ? 0 : 600 / 45) + (y / 23) * 600,
        600 / 40
      );
      
    }
  }
}

function hexagon(x, y, r) {
  beginShape();
  for (let a = 0; a < 2 * PI; a += (2 * PI) / 6) {
    let x2 = cos(a) * r;
    let y2 = sin(a) * r;
    vertex(x + x2, y + y2);
  }
  endShape(CLOSE);
}
