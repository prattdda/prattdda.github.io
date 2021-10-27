let theImage;
let theCanvas;

function preload(){
    // create an array of the existing images
    // create a data set with the names of the files and the names of the workeers
    theImage = loadImage("01_Pratt_Essential_Workers-3.jpg");
}
function setup() {
    theCanvas =  createCanvas(windowWidth, windowHeight -100);
    background(255);
 
}

function draw() {
  image(theImage, 0, 0, windowWidth,windowHeight)
  ellipse(mouseX,mouseY, 10, 10);
  text("Latisha Harris (Public Safety)", 500, windowHeight - 75)

  // for (var i = 0; i < 7; i++) {
  //   ellipse(100 * i, 100, theRandom, theRandom);
  // }
}