// Boring Game 2021 by Daichen Wang
// 2021 Changcheng Yang
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

//audio
let mySoundGameOver;
let mySoundMusic;
let mySoundhit;
let mySoundgetCoin;
let mySoundstart;
let mySoundlevelup;

//images
let IMG1;                                              
let IMG2;
let IMG3;
let IMG4;
let IMG5;
let IMG6;
let IMGCoin;
let IMGLv2Monster1;
let IMGLv2Monster2;
let IMGLv2Map;
let IMGSushi;

//fonts
let font1;

//variables
let level = 0;
let x = 200;                                                        //player x
let y = 200;                                                        //player y
let a = 0;                                                          //monster x
let b = 0;                                                          //monster y
let directionX = 3.5;
let directionY = 5.7;
let life = 3;
let score = 0;
let Switch1 = true;
let Switch2 = true;
let directionCoinX = 2.5;                                           //coin direction control
let directionCoinY = 3.8;
let coinx = 400;                                                    //coinx
let coiny = 0;                                                      //coiny
let Switch3 = true;
let Switch4 = true
function preload(){
  
  IMG1 = loadImage('Ninja.png');                                    
  IMG2 = loadImage('Haiku.png');
  IMG3 = loadImage('Gameover.png');
  IMG4 = loadImage('sakuraJapan.gif');
  IMG5 = loadImage('boom.png');
  IMG6 = loadImage('background.png');
  IMGCoin = loadImage('coin.gif');
  IMGLv2Monster1 = loadImage('monsterlv2-1.png');
  IMGLv2Monster2 = loadImage('monsterlv2-2.png');
  IMGLv2Map = loadImage('lv2map.gif');
  IMGSushi = loadImage('sushi.gif')
  
  
  mySoundGameOver = loadSound('8bitgameover.mp3');
  mySoundMusic = loadSound('gamemusic.mp3');
  mySoundhit = loadSound('hit.mp3');
  mySoundgetCoin = loadSound('getCoin.mp3');
  mySoundstart = loadSound('startmusic.mp3');
  mySoundlevelup = loadSound('levelup.mp3')
  
  font1 = loadFont('8bit16.ttf')
  frameRate(60);
  
  
}


function setup() {
  imageMode(CENTER);                                                                  //设定上传到image的x，y为其中心
  createCanvas(400,400);
  //background('grey')
}



function draw() {
  
// level 0  
  
  if(level==0){                                                                         //【level0 Start Part & Main Menu】
    image(IMG6,200,200,400,400); 
    textFont(font1);
    textSize(30);
    text("Boring Game",80,150)
    textSize(14);
    text('Touch To Start',115,200)
    if(Switch3 == true){
      mySoundstart.play();                                                               //play background music
      Switch3 = false;
      }
    if(mouseIsPressed === true){                                            //Press p to start
      level = 1;
      mySoundstart.stop();
      Switch3 = false;
    }
}
  
// leve 1:
  
  if(level == 1){                                                                       //【level1 only 1 monster】
    
    if(Switch2 == true){
      mySoundMusic.play();                                                               //play background music
      Switch2 = false;
      }
    image(IMG4,200,200,400,400);                                                       //load background
    textSize(12);
    text('Your Current Score: ' + score, 5, 60);
    text('Try To Catch The Onigiri!',5,40)
    
    
    coinx = coinx + directionCoinX ;                                                  //coin 按照轨迹移动
    coiny = coiny + directionCoinY;
    image(IMGSushi,coinx,coiny,50,50);                                                 //sushi image                                                     
    if(coinx > 400 || coinx < 0){
      directionCoinX = directionCoinX * -1; 
      }
    
    
    if(coiny < 0 || coiny > 400){
      directionCoinY = directionCoinY * -1;
      }
    
    
    image(IMG1,mouseX,mouseY,50,50);                                                             //Ninja image
    
    
    a = a + directionX ;                                                               //Monster move control
    b = b + directionY ;
    image(IMG2,a,b,50,50);                                                             //Haiku Image
  
    if(a > 400 || a < 0){
      directionX = directionX * -1; 
      }
    
    if(b < 0 || b > 400){
      directionY = directionY * -1;
      }
  
    
    if(dist(a,b,mouseX,mouseY)<=50){                                                             //如果相撞
      image(IMG5,mouseX,mouseY,100,100);                                                         //显示boom图片
      life = life -1;                                                                  //生命-1
      x = 0;                                                                           //reset character position
      y = 0;
      a = 200;                                                                         //reset monster position
      b = 200;
      mySoundhit.play();                                                            
    }
    
    
    if(dist(mouseX,mouseY,coinx,coiny)<=65){                                                     //如果吃到sushi
      score = score + 1;                                                               //分数+1
      coinx = random(400);                                                                     //reset coin position
      coiny = 0;
      mySoundgetCoin.play();                                                            
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if(life>1){
      fill(0,0,0)
      text('You Have '+ life + ' Chances Left!',5,80);                                //提醒玩家剩余life数
    }
    if(life==1){
      fill(255,0,0)                                                                  //set red color to the text
      text('You Have Only '+ life + ' Chances Left! Take Care!',5,80);                //只剩1条命时，改变颜色
      fill(0)                                                                        //set black color to the text
    }
    
    if(life==0){                                                                      //life == 0, enter level1
      level = 99;                                                                                                               
    }
    if(score==5){                                                                   //达到分数要求 进入level 2.1
    level = 2
    score = 0                                                                         //变量全部归零
    a = 0
    b = 0
    x = 200
    y = 200
    coinx = 400
    coiny = 0
    life = 3
    mySoundMusic.stop();
    }
    
}


  
  
// level 2 Mainpage
  if(level == 2){                                                                       //【level2, 2 monsters】
    
    if(Switch2 == true){
      mySoundMusic.play();                                                               //play background music
      Switch2 = false;
      }
    image(IMGLv2Map,200,200,400,400);                                                       //load level2 background
    fill(255,255,255)                                                                      //set white color to the text
    textSize(15);
    text('Stay tuned! lv2 is coming soon!',30,200);
    text('Press to exit',110,250)
    if(mouseIsPressed == true){                                            //press o to exit
      level = 0;
      Switch3 = true;
      Switch4 = true;
      Switch1 = true;
      Switch2 = true;
      }

    
}

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
// level 99(gameover)
  

  
  if(level == 99){                                                                    //【level3 Gameover Part】
    image(IMG3,200,200,400,200);                                                     //显示GameOver图像
    textSize(12);
    text('Press To Play again',100,250)
    if(Switch1 == true){
      mySoundGameOver.play(); 
      Switch1 = false;
      }
    mySoundMusic.stop();
    if(mouseIsPressed == true){                                            //press o to exit
      level = 0;
      life = 3;                                                                       //set life = 3
      Switch1 = true;
      Switch2 = true;
      Switch3 = true;
      Switch4 = true;
      }
}



































}
