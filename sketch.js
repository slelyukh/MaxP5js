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
function drawMountain(x, y, scale)
  let mountainHeight = 150
  let mountainWidth = 400/3

    // draw left mountain
    triangle(x-mountainWidth,y-mountainHeight/2,x-mountainWidth/2,y+mountainHeight/2,x+mountainWidth/2,y+mountainHeight/2)

    // draw middle mountain
    triangle(x,y-mountainHeight/2,x-mountainWidth/2,y+mountainHeight/2,x+mountainWidth/2,y+mountainHeight/2)

    // draw right mountain
    triangle(x+mountainWidth,y-mountainHeight/2,x-mountainWidth/2,y+mountainHeight/2,x+mountainWidth/2,y+mountainHeight/2)
function draw() {
  background(Math.ceil(Math.random() * 256));
  drawPlayer(200,200)
  drawMountain(200,200)
}