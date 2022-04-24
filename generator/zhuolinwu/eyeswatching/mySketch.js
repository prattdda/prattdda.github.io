
// eyes watching by Zhuolin Wu 2021
//disable mobile device native touch commands
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

let t=0;
let x=255;
let y=255;
let z=255;
let r=0;
let p=0;
let q=0;
let w=0;


function setup() {
  createCanvas(displayWidth,displayHeight);
}

function draw() {
  background(255,255,255);
  t = t+0.6;
  fill(t,0,0);
  for(let Zhuo=400; Zhuo!=0; Zhuo = Zhuo-10)
    {  
      
      stroke(Zhuo);
      ellipse(117/2,253.2/2,Zhuo,Zhuo);
      
    }
  
  
  y = y-0.6;
  fill(0,y,0);
  for(let lin=60.0; lin!=0; lin = lin-10)
    {  
      stroke(lin);
      ellipse(0,0,lin,lin);
    }
  
  z = z-0.6;
  fill(0,0,z)
  for(let lin=60.0; lin!=0; lin = lin-10)
    {  
      stroke(lin);
      ellipse(117,0,lin,lin);
    }
  
  fill(0,y,z)
  for(let lin=60.0; lin!=0; lin = lin-10)
    {  
      stroke(lin);
      ellipse(0,253.2,lin,lin);
    }
 
 x = x-0.6;
 fill(x,0,z)
  for(let lin=60.0; lin!=0; lin = lin-10)
    {  
      stroke(lin);
      ellipse(117,253.2,lin,lin);
    }
 
  r=r+0.6;
  fill(r);
  stroke(r);
    ellipse(117/2,253.2/2,r,r);
  
  p=p+0.2;
  fill(0,0,0);
  stroke(p);
  ellipse(117/2,253.2/2,p,p);
  
  q=q+0.1;
  fill(255,255,255);
  ellipse(117/2,253.2/2,p,q);
  
  w=w+0.075;
  fill(0,0,0);
  ellipse(117/2,253.2/2,w,w);
  
}