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
    theImage = loadImage('images/person1.jpg')
  //  for (let i = 0; i < 5; i++){
  //    thePeople[i] = loadImage('images/person' + i + '.jpg')
  //  }
 


}
function setup() {
    theCanvas =  createCanvas(displayWidth, displayHeight);
  
    pixelDensity(1);
 
   
}

document.querySelector("button").addEventListener("click", saveImage)
function draw() {
  background(0);
  text("Latisha Harris (Public Safety)", 500, windowHeight - 75)
  text("photo by Andy Todd", 500, displayHeight -50)
  // for (var i = 0; i < 7; i++) {
  //   ellipse(100 * i, 100, theRandom, theRandom);
  // }
  image(theImage, 0,0, theImage.width / 4, theImage.height / 4)
}


function saveImage() {
  saveCanvas(theCanvas, "myCanvas", "jpg")
 
 }
 