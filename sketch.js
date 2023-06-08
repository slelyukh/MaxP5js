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
  const bodyHeight = 7.5 * scale;
  const bodyWidth = 5 * scale
  const armWidth = 5 * scale
  const armHeight = 2.5 * scale
  const legWidth = 2.5 * scale
  const legHeight = 5 * scale
  const headWidth = 5 * scale

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

// TODO: finish drawMountain function
function drawMountain(x, y, scale){
  let mountainHeight = 150
  let mountainWidth = 400/3

    // draw left mountain
    triangle(x-mountainWidth,
      y-mountainHeight/2,
      x,
      y+mountainHeight/2,
      x-mountainWidth*1.5,
      y+mountainHeight/2)

    // draw middle mountain
    triangle(x,y-mountainHeight/2,x+mountainWidth/2,y+mountainHeight/2,x-mountainWidth/2,y+mountainHeight/2)

    // draw right mountain
    triangle(x+mountainWidth,y-mountainHeight/2,x+mountainWidth/2,y+mountainHeight/2,x-mountainWidth/2,y+mountainHeight/2)
  }

function draw() {
  background(Math.ceil(Math.random() * 256));
  // Arrays
  const playerPoints = [
    {x: 100, y: 100},
    {x: 150, y: 200},
    {x: 300, y: 300}
  ];

  for (let i = 0; i < 5; i++) {
    drawPlayer(Math.ceil(Math.random() * 400), 
    Math.ceil(Math.random() * 400), 
    Math.ceil(Math.random() * 15))
  }

  for (let i = 0; i < 5; i++) {
    drawMountain(Math.ceil(Math.random() * 400), 
    Math.ceil(Math.random() * 400), 
    Math.ceil(Math.random() * 10))
  }

  // TODO: draw 9 equally spaced players
  for (let i = 0; i < 3; i++) {
    drawPlayer(i * 50, )
    console.log("i = " + i);
    // draw a row of 3 players
    for (let j = 0; j < 3; j++) {
      console.log("j = " + j);
    }
  }

  // TODO: randomly place 5 mountains
  //drawMountain(200,200)


}