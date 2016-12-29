function setup() {
  //Use the sizeMultiplier to adjust the size of the image. The multiplier 5.76 creates a 20 inch X 20 inch picture
  sizeMultiplier = 5.76;
  createCanvas(1000 * sizeMultiplier, 1000 * sizeMultiplier);

  //Use random seeds to generate different versions of the art, then pick the one you like best and lock it in
  ourSeed = 156 //round(random(10000))
  randomSeed(ourSeed);

  //If you want to see the art grow over time, play with the frameRate and delete noLoop(); and the following For Loop
  frameRate(60)
  noLoop();
  //change the background color if you want to see the size of the canvas
  background(255)

  //Delete this if you want to watch the code animate
  for (i=0; i<350; i++) {
    loop();
    noLoop();
  }

  //Uncomment the following line to display the seed number on the canvas
  //text(ourSeed, 900 * sizeMultiplier, 900  * sizeMultiplier, 100, 100)

}

function draw() {
  //Get random X and Y coordinates
  randomX = random(0 * sizeMultiplier,500 * sizeMultiplier)
  randomY = random(0 * sizeMultiplier,500 * sizeMultiplier)

  //Get a random square side
  squareSide = random(10 * sizeMultiplier,200 * sizeMultiplier)

  //Create the square
  //Transparent
  noFill()
  //Black stroke
  stroke(0)
  //You may want to change strokeWeight based on the sizeMultiplier
  strokeWeight(8)
  //Pick a random orientation
  rotate(random(360))
  //Draw the square
  rect(randomX,randomY, squareSide,squareSide)

}

//Saves the output as a png when you click the mouse
function mouseClicked() {
  saveCanvas('squares350', 'png');
}
