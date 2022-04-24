// thank you!! 2022 rebecca (marks) leopold
//disable mobile device native touch commands
function touchMoved() {
	return false;
  }

let theImage, theCanvas, theButton;
let thePerson;
let thePeople = [];
// this data set connects the image path 
// with the human's name
let theData = { 
  "thepeople": [
  {
    name: "Alexander Vroulos (Facilities)",
    path: "images/person0"
  },
  {
    name: "Camilo Vazquez (Facilities)",
    path: "images/person1"
  },
  {
    name: "Chris Gavlick (Facilities) and Joe Santa Ana (Public Safety)",
    path: "images/person2"
  },
  {
    name: "Elbi Cespedes (Facilities)",
    path: "images/person3"
  },
  {
    name: "Esmond Gooding (Facilities)",
    path: "images/person4"
  },
  {
    name: "Darry Torbert (Public Safety) and Terry Smith (Public Safety)",
    path: "images/person5"
  },
  {
    name: "Hugh Sabre (Public Safety)",
    path: "images/person6"
  },
  {
    name: "Jon Tucker (Public Safety)",
    path: "images/person7"
  },
  {
    name: "Jose Estevez (Facilities)",
    path: "images/person8"
  },
  {
    name: "Jose Rodriguez (Facilities)",
    path: "images/person9"
  },
  {
    name: "Latoya Downing (Safe Environment Business – S.E.B.)",
    path: "images/person10"
  },
  {
    name: "Luis Ortiz (Public Safety)",
    path: "images/person11"
  },
  {
    name: "Martin Macareno (Facilities)",
    path: "images/person12"
  },
  {
    name: "Michelle Brown (Facilities)",
    path: "images/person13"
  },
  {
    name: "Miriam Morales (Facilities)",
    path: "images/person14"
  },
  {
    name: "Sheila Horne (Facilities)",
    path: "images/person15"
  },
  {
    name: "Zenellyz Parajon (Facilities)",
    path: "images/person16"
  },
  
  {
    name: "Latisha Harris (Public Safety)",
    path: "images/person17"
  }
]}


let theFaces = [];
let theName;
let thePath;
let theRandom;
function setup() {
    theCanvas =  createCanvas(displayWidth, displayHeight- 100);
    pixelDensity(1);
    // theImage = random(thePeople)

    theRandom = random(0, thePeople.length)
    for (let i = 0; i < theData.thepeople.length;i++){
      theFaces[i] = theData.thepeople[i];
     
    
    }

    thePerson = random(theFaces)
    thePath = thePerson.path + ".jpg"
   theImage =  loadImage(thePath)
    
   
}

document.querySelector("button").addEventListener("click", saveImage)
function draw() {
  background(0);
  fill(255);
  image(theImage, 0,25, theImage.width / 4, theImage.height / 4)
  textFont("courier" )
  text(thePerson.name, 10, theCanvas.height - 125);
  text("photo by Andy Todd, 2020", theCanvas.width - 200, theCanvas.height - 100)

}


function saveImage() {
  saveCanvas(theCanvas, thePerson.name, "jpg")
 
 }
 
/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling
 * the page.
 */
document.ontouchmove = function(event) {
  event.preventDefault();
};

