function setup(){
  createCanvas(400, 400);
  background(200);
  frameRate(1);
}

// TODO: make a drawMountains function(x, y, scale)
// do everything like you did for player
// use 3 triangles to make mountains

// TODO: add a scale argument 
function drawPlayer(x, y, scale) {
  // hint: you should use scale to determine all of these variables
  let bodyHeight = 75
  let bodyWidth = 50
  let armWidth = 50
  let armHeight = 25
  let legWidth = 25
  let legHeight = 50
  let headWidth = 50

  // draw player body
  rect(x-(bodyWidth/2), y-(bodyHeight/2), bodyWidth, bodyHeight);
  // draw right arm
  rect(x+(bodyWidth/2), y-(bodyHeight/2), armWidth, armHeight);
  // draw left arm
  rect(x-(bodyWidth/2)-armWidth, y-(bodyHeight/2), armWidth, armHeight);
  // draw left leg
  rect(x-(bodyWidth/2), y+(bodyHeight/2), legWidth, legHeight)
  // draw right leg
  rect(x, y+(bodyHeight/2), legWidth, legHeight)
  //draw player head
  circle(x, y-(bodyHeight/2)-(headWidth/2), headWidth)
}
function drawMountain1(x, y, scale)
  let mountain1Height = 100
  let mountain1Width = 75

  // draw left mountain
  triangle(x,y-mountainHeight,x+mountainWidth,y+mountainHeight/2,x-mountainWidth,y+mountainHeight/2)

function drawMountain2(x, y, scale)
  let mountain2Height = 100
  let mountain2Width = 75

  // draw right mountain
  triangle(x,y-mountainHeight,x+mountainWidth,y+mountainHeight/2,x-mountainWidth,y+mountainHeight/2)
  
function drawMountain3(x, y, scale)
  let mountain3Height = 100
  let mountain3Width = 75

  // draw middle mountain
  triangle(x,y-mountainHeight,x+mountainWidth,y+mountainHeight/2,x-mountainWidth,y+mountainHeight/2)
  // draw left mountain
function draw() {
  background(Math.ceil(Math.random() * 256));
  drawPlayer(200,200)
  drawMountain1(100,200)
  drawMountain2(300,200)
  drawMountain3(200,200)
}