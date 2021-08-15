var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25;
var wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35;
var door1,door2;
var keyImage,floorImage;
var player;

function setup() {
  createCanvas(1000,600)
  floor=createSprite(500,300)
  floor.addImage(floorImage)
  floor.scale=2.5;

  wall1=createSprite(50,125,10,250)
  wall2=createSprite(50,475,10,250)
  wall3=createSprite(200,355,300,10)
  wall4=createSprite(200,245,300,10)
  wall5=createSprite(240,100,370,10)
  wall6=createSprite(70,170,40,60)
  wall7=createSprite(240,170,60,60)
  wall8=createSprite(345,210,10,60)
  wall9=createSprite(385,185,80,10)
  door1 = createSprite(430,140,10,90);
  //door2 = createSprite(430,170,10,40);
  wall10=createSprite(150,525,10,150)
  wall11=createSprite(220,425,10,150)
  wall12=createSprite(300,525,10,150)
  wall13=createSprite(350,425,10,150)
  wall14=createSprite(400,500,110,10)
  wall15=createSprite(450,425,10,150)
  wall16=createSprite(610,350,320,10)
  wall19=createSprite(525,250,150,10)
  wall22=createSprite(565,150,200,10)
  wall22=createSprite(665,200,10,100)
  wall23=createSprite(460,200,10,100)
  wall25=createSprite(715,250,100,10)
  wall26=createSprite(760,300,10,100)
  wall28=createSprite(610,450,220,10)
  wall30=createSprite(505,530,10,150)
  wall31=createSprite(715,530,10,150)



  wall17 = createSprite(925,400,10,200);
  wall18 = createSprite(800,475,10,250);
  wall20 = createSprite(830,350,65,10);
  wall21 = createSprite(895,500,65,10);
  wall24 = createSprite(860,375,10,50);
  wall27 = createSprite(850,55,150,115);
  wall29 = createSprite(600,30,170,80);
  wall32 = createSprite(860,475,10,50);
  key=createSprite(100,50)
  key.addImage(keyImage)
  key.scale=0.2;
  colourSprit(wall1)
  colourSprit(wall2)
  colourSprit(wall3)
  colourSprit(wall4)
  colourSprit(wall5)
  colourSprit(wall6)
  colourSprit(wall7)
  colourSprit(wall8)
  colourSprit(wall9)
  colourSprit(wall10)
  colourSprit(wall11)
  colourSprit(wall12)
  colourSprit(wall13)
  colourSprit(wall14)
  colourSprit(wall15)
  colourSprit(wall16)
  colourSprit(wall17)
  colourSprit(wall18)
  colourSprit(wall19)
  colourSprit(wall20)
  colourSprit(wall21)
  colourSprit(wall22)
  colourSprit(wall23)
  colourSprit(wall24)
  colourSprit(wall25)
  colourSprit(wall26)
  colourSprit(wall27)
  colourSprit(wall28)
  colourSprit(wall29)
  colourSprit(wall30)
  colourSprit(wall31)
  colourSprit(wall32)
  door1.shapeColor="brown"

  player=createSprite(20,50,20,20)

}

function preload()
{
  keyImage=loadImage("key.png")
  floorImage=loadImage("floor.jpg")
}

function draw() {
  background(0,0,0);  
  if (keyDown(UP_ARROW)){
    player.y-=2;
  }else if(keyDown(DOWN_ARROW)){
    player.y+=2;
  }
  else if (keyDown(LEFT_ARROW)){
    player.x-=2;
  }else if(keyDown(RIGHT_ARROW)){
    player.x+=2;
  }
 
  drawSprites();
}
function colourSprit(s){
  s.shapeColor="white"
}