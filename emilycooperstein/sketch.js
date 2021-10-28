let theVideo;
let theCanvas;
let theX;
let theY;
let theDiameter = 100;
let theState = false;
function preload() {
    // theBird = loadImage('_mediums/makes.jpg');
    theVideo = createVideo('landscape2.mov');
    // theVideo.hide();
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  background(255);

  }

function draw() {
    let theCrest = (windowWidth * 1080) / 1920;
    image(theVideo, 0, 100);
//
//
// let theX = windowWidth / 2;
// let theY = theCrest + 300;
// //
// if (dist(mouseX, mouseY, theX, theY) < theDiameter / 2) {
//     theState = true;
//     fill(160, 0, 100, 150);
// } else {
//     theState = false;
//     fill(0);
// }
// noStroke();
// ellipse(theX, theY, theDiameter, theDiameter);
// //
// keep static image to debug video.
// image(theBird, 100, 100);
}
