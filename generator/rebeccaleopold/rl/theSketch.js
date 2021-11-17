let theRandom;
let theCanvas;

function setup() {
    theCanvas =  createCanvas(windowWidth, windowHeight);
    background(220);
    theRandom = random(10, 255);
}

function draw() {
  fill(100, 100, theRandom);
  ellipse(mouseX,mouseY, 10, 10);

  // for (var i = 0; i < 7; i++) {
  //   ellipse(100 * i, 100, theRandom, theRandom);
  // }
}

function mousePressed(){
  saveCanvas(theCanvas, 'myCanvas', 'jpg');

}
