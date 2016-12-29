function setup() {
  createCanvas(1000, 1000);
  frameRate(2)
  shadowDistance = 30;
  squareSide = 100

  palette = [
    [191,0,0],
    [0,0,0],
    [255,247,0],
    [228,247,247],
    [5,0,239]
  ]

}

function draw() {
  fill(255)
  randomX = random(500)
  randomY = random(500)

  // pick the color
  randomColor = Math.floor(random(5))

  // create the shadow
  fill(0,0,0, 50)
  noStroke()
  rect(randomX+shadowDistance,randomY+shadowDistance,squareSide,squareSide)

  // create the object
  fill(palette[randomColor])
  stroke(0)
  rect(randomX,randomY,squareSide,squareSide)

}
