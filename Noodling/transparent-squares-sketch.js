function setup() {
  createCanvas(1000, 1000);
  ourSeed = round(random(1000))
  randomSeed(ourSeed);
  frameRate(30)
  noLoop();

  shadowDistance = 30;
  for (i=0; i<100; i++) {
    loop();
    noLoop();
  }
  //squareSide = 100
  text(ourSeed, 900,900,100,100)

  /*
  palette = [
    [191,0,0],
    [0,0,0],
    [255,247,0],
    [228,247,247],
    [5,0,239]
  ]
  */

}

function draw() {
  fill(255)
  randomX = random(500)
  randomY = random(500)

  // pick the color
  randomColor = Math.floor(random(5))
  squareSide = random(10,200)

  /*
  // create the shadow
  fill(0,0,0, 50)
  noStroke()
  rect(randomX+shadowDistance,randomY+shadowDistance,squareSide,squareSide)
  */

  // create the object
  noFill()
  stroke(0)
  rotate(random(90))
  rect(randomX,randomY, squareSide,squareSide)

}
