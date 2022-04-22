// thank you!! 2022 rebecca (marks) leopold

//disable mobile device native touch commands
function touchMoved() {
	return false;
  }

let theImage, theCanvas, theButton;
let thePeople = [];


function preload(){
    // create an array of the existing images
    // create a data set with the names of the files and the names of the workeers
  
    


}
function setup() {
    theCanvas =  createCanvas(displaywWidth, displayHeight -100);
    background(255);
 
}

document.querySelector("button").addEventListener("click", saveImage)
function draw() {
  image(theImage, 0, 0, theImage.width,theImage.height)
  ellipse(mouseX,mouseY, 10, 10);
  text("Latisha Harris (Public Safety)", 500, windowHeight - 75)
  text("photo by Andy Todd", 500, displayHeight -50)
  // for (var i = 0; i < 7; i++) {
  //   ellipse(100 * i, 100, theRandom, theRandom);
  // }
}


function saveImage() {
  saveCanvas(theCanvas, "myCanvas", "jpg")
 }
 