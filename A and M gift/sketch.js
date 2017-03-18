function setup() {
  //Use the sizeMultiplier to adjust the size of the image. The multiplier 5.76 creates a 20 inch X 20 inch picture
  sizeMultiplier = 1;
  createCanvas(1000 * sizeMultiplier, 1000 * sizeMultiplier);

  //Use random seeds to generate different versions of the art, then pick the one you like best and lock it in

  //ourSeed = 156 //round(random(10000))
  //randomSeed(ourSeed);

  //Uncomment the following line to display the seed number on the canvas
  //text(ourSeed, 900 * sizeMultiplier, 900  * sizeMultiplier, 100, 100)


  //If you want to see the art grow over time, play with the frameRate otherwise give an iteration number
  animated = false;

  iterationNumber = 0;

  frameRate(5)

  if(animated) {
    iterationNumber = 0;

  }
  else {
      noLoop();
  }


  //change the background color if you want to see the size of the canvas
  background(255)


// Loops if not animated
  for (i=0; i<iterationNumber; i++) {
    loop();
    noLoop();
  }

}

function draw() {
  //Get random X and Y coordinates
  randomX = random(0 * sizeMultiplier,500 * sizeMultiplier)
  randomY = random(0 * sizeMultiplier,500 * sizeMultiplier)

  //Get a random shape size
  shapeSide = random(10 * sizeMultiplier,200 * sizeMultiplier)

  //Create the shape

  // Fill Color

  //fill(100)
  noFill()

  // Stroke Color
  stroke(0)

  //You may want to change strokeWeight based on the sizeMultiplier
  //strokeWeight(8)

  //Pick a random orientation
  //rotate(random(360))

  //Draw the shape
  rect(randomX,randomY, shapeSide,shapeSide)

}

//Saves the output as a png when you click the mouse
/*
function mouseClicked() {
  saveCanvas('savedP5JSImage', 'png');
}
*/
