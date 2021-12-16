let t=0;
let x=255;
let y=255;
let z=255;
let r=0;
let p=0;
let q=0;
let w=0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255,255,255);
  t = t+0.6;
  fill(t,0,0);
  for(let Zhuo=400; Zhuo!=0; Zhuo = Zhuo-10)
    {  
      
      stroke(Zhuo);
      ellipse(400,400,Zhuo,Zhuo);
      
    }
  
  
  y = y-0.6;
  fill(0,y,0);
  for(let lin=600; lin!=0; lin = lin-10)
    {  
      stroke(lin);
      ellipse(0,0,lin,lin);
    }
  
  z = z-0.6;
  fill(0,0,z)
  for(let lin=600; lin!=0; lin = lin-10)
    {  
      stroke(lin);
      ellipse(800,0,lin,lin);
    }
  
  fill(0,y,z)
  for(let lin=600; lin!=0; lin = lin-10)
    {  
      stroke(lin);
      ellipse(0,800,lin,lin);
    }
 
 x = x-0.6;
 fill(x,0,z)
  for(let lin=600; lin!=0; lin = lin-10)
    {  
      stroke(lin);
      ellipse(800,800,lin,lin);
    }
 
  r=r+0.6;
  fill(r);
  stroke(r);
    ellipse(400,400,r,r);
  
  p=p+0.2;
  fill(0,0,0);
  stroke(p);
  ellipse(400,400,p,p);
  
  q=q+0.1;
  fill(255,255,255);
  ellipse(400,400,p,q);
  
  w=w+0.075;
  fill(0,0,0);
  ellipse(400,400,w,w);
  
}