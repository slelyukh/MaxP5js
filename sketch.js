var canvasWidth = 400
var canvasHeight = 400

function setup(){
  createCanvas(canvasWidth, canvasHeight);
  background(200);
  frameRate(5);
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
function drawMountain(x, y, scale) {
  let mountainHeight = 150
  let mountainWidth = 400/3

     // draw left mountain
     triangle(x-mountainWidth,
      y-mountainHeight/2,
      x-mountainWidth/2,
      y+mountainHeight/2,
      x-mountainWidth*1.5,
      y+mountainHeight/2)

    // draw middle mountain
    triangle(x,y-mountainHeight/2,x+mountainWidth/2,y+mountainHeight/2,x-mountainWidth/2,y+mountainHeight/2)

    // draw right mountain
    triangle(x+mountainWidth,y-mountainHeight/2,x+mountainWidth/2,y+mountainHeight/2,x-mountainWidth/2,y+mountainHeight/2)
  }
  
function drawMountain(x, y, scale) {
  let mountainHeight = 150
  let mountainWidth = 400/3

  // draw left mountain
  triangle(x-mountainWidth,y-mountainHeight/2,x-mountainWidth/2,y+mountainHeight/2,x+mountainWidth/2,y+mountainHeight/2)

  // draw middle mountain
  triangle(x,y-mountainHeight/2,x-mountainWidth/2,y+mountainHeight/2,x+mountainWidth/2,y+mountainHeight/2)

  // draw right mountain
  triangle(x+mountainWidth,y-mountainHeight/2,x-mountainWidth/2,y+mountainHeight/2,x+mountainWidth/2,y+mountainHeight/2)
}

class Player {
  constructor(x, y, scale, name, MainPlayer) {
    this.x = x
    this.y = y
    this.scale = scale
    this.name = name
    this.MainPlayer = MainPlayer
    this.isAlive = true
  }

  draw() {
    if (!this.isAlive) {
      return
    }
    // hint: you should use scale to determine all of these variables
    const bodyHeight = 7.5 * this.scale;
    const bodyWidth = 5 * this.scale
    const armWidth = 5 * this.scale
    const armHeight = 2.5 * this.scale
    const legWidth = 2.5 * this.scale
    const legHeight = 5 * this.scale
    const headWidth = 5 * this.scale
  
    // draw player body
    rect(this.x-(bodyWidth/2), this.y-(bodyHeight/2), bodyWidth, bodyHeight);
    // draw right arm
    rect(this.x+(bodyWidth/2), this.y-(bodyHeight/2), armWidth, armHeight);
    // draw left arm
    rect(this.x-(bodyWidth/2)-armWidth, this.y-(bodyHeight/2), armWidth, armHeight);
    // draw left leg
    rect(this.x-(bodyWidth/2), this.y+(bodyHeight/2), legWidth, legHeight)
    // draw right leg
    rect(this.x, this.y+(bodyHeight/2), legWidth, legHeight)
    //draw player head
    circle(this.x, this.y-(bodyHeight/2)-(headWidth/2), headWidth)
  }

  onTheMap(x, y) {
    if (x > 0 && x < canvasWidth && y > 0 && y < canvasHeight) {
      return true;
    } else {
      return false;
    }
  }

  touchingPlayer(otherPlayer) {
    if (Math.abs(this.x - otherPlayer.x) < 10 && Math.abs(this.y - otherPlayer.y) < 10) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    let oldX = this.x
    let oldY = this.y

    // move the player
    if (this.MainPlayer === true){
      if (wKey) {
        this.y -= 10
      }
      if (aKey) {
        this.x -= 10
      }
      if (sKey) {
        this.y += 10
      }
      if (dKey) {
        this.x += 10
      }
    } else {
      this.x += Math.ceil(Math.random() * 20) - 10;
      this.y += Math.ceil(Math.random() * 20) - 10;
    }


    // undo the movement if the player is off the map
    if (!this.onTheMap(this.x, this.y)) {
      this.x = oldX;
      this.y = oldY;
    }
    
  }
}

class Soldier extends Player {
  constructor(x, y, scale, name, country) {
    super(x, y, scale, name, false)
    this.country = country
  }

  draw() {
    // draw the player in army green because they are a soldier
    fill(75, 83, 32);
    super.draw();
    fill(256, 256, 256);
  }
}

// global variables
var wKey = false
var aKey = false
var sKey = false
var dKey = false

playerList = []
playerList.push(new Player(100, 200, 2, "Samuel", true))
for (let i = 0; i < 10; i++) {
  // add a new soldier
  playerList.push(new Soldier(Math.ceil(Math.random() * canvasWidth), 
            Math.ceil(Math.random() * canvasHeight),
            2,
            "Soldier" + i,
            "Hong Kong",
            false))
}
//

// this function checks if each of the WASD keys are pressed
// and updates the variables if they are.

// youll see
function keyPressed() {
  if (key === 'w') wKey = true
  if (key === 'a') aKey = true
  if (key === 's') sKey = true
  if (key === 'd') dKey = true
}

// make them run away from the player?
// we can make them check the direction that the player is in relative to them
// and make them move in the opposite direction
// so if I'm at 50,50 and theyre at 100,100 they would move down and right
// If you have a final project in your summer school class your project is gonna be
// 100x better than anyone else's

// if any of the WASD keys are released then the key variables
// are set to false
function keyReleased() {
  if (key === 'w') wKey = false
  if (key === 'a') aKey = false
  if (key === 's') sKey = false
  if (key === 'd') dKey = false
}

function draw() {
  background(Math.ceil(Math.random() * 256));
  // Arrays

  for (let i = 0; i < playerList.length; i++) {
    let player = playerList[i];
    player.move()
  }

  // check if any of the players are touching
  // outer loop run: i = 0
  // inner loop run: j = 1, 2 ,3 ... 10
  // outer loop run: i = 1
  // inner loop run: j = 2 ,3 ... 10
  // outer loop run: i = 2
  // inner loop run: j = 3 ... 10

  for (let i = 0; i < playerList.length; i++) {
    let player = playerList[i];
    for (let j = i+1; j < playerList.length; j++) {
      let otherPlayer = playerList[j];
      if (player.touchingPlayer(otherPlayer)) {
        // if I touch anothery player, they die
        if (player.MainPlayer === true) {
          otherPlayer.isAlive = false
        }
        console.log(player.name + " is touching " + otherPlayer.name)
      }
    }
  }

  for (let i = 0; i < playerList.length; i++) {
    let player = playerList[i];
    player.draw()
  }

}