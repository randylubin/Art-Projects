function setup() {
  //Use the sizeMultiplier to adjust the size of the image. The multiplier 5.76 creates a 20 inch X 20 inch picture
  sizeMultiplier = 5.76;
  createCanvas(1000 * sizeMultiplier, 1000 * sizeMultiplier);

  //change the background color if you want to see the size of the canvas
  //background(250)

  //Use random seeds to generate different versions of the art, then pick the one you like best and lock it in

  ourSeed = 7337//round(random(10000)) //Final Choice: 7337
  randomSeed(ourSeed);
  noiseSeed(ourSeed);

  //Uncomment the following line to display the seed number on the canvas
//  fill(0)
//  textSize(30)
//  text(ourSeed, 10, 10, 300, 300)


  //If you want to see the art grow over time, play with the frameRate otherwise give an iteration number
  animated = false;

  //Final choice: 476, 747, 1657
  iterationNumber = 1657;
  strokeWeight(3); // 3
  increment = .005;  //.005
  bezierMagnifier = 1; // 1

  frameRate(60)

  if(animated) {
    iterationNumber = 0;

  }
  else {
      noLoop();
  }


  stroke(0, 25); // 0, 18

  noFill();
  t = 0;





// Loops if not animated
  for (i=0; i<iterationNumber; i++) {
    loop();
    noLoop();
  }

}

function draw() {
/*
  redValue = map(noise(t),0,1,0,255)
  greenValue = map(noise(t+35),0,1,0,255)
  blueValue = map(noise(t+60),0,1,0,255)

  stroke(0, greenValue, blueValue, 18);
*/

  var x1 = width * noise(t + 15);
  var x2 = width * noise(t + 25);
  var x3 = width * noise(t + 35);
  var x4 = width * noise(t + 45);
  var y1 = height * noise(t + 55);
  var y2 = height * noise(t + 65);
  var y3 = height * noise(t + 75);
  var y4 = height * noise(t + 85);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  t += increment;

/*
  if (frameCount == iterationNumber){
    saveCanvas('aandm' + iterationNumber, 'png');
  }
*/

  //Frame Count
  /*

  noStroke()
  fill(250)
  rect(10,50,300,50)

  fill(0)
  text(frameCount, 10, 50, 300, 300)
  stroke(0,18)
  noFill()
*/
}


//Saves the output as a png when you click the mouse
/*
function mouseClicked() {
  saveCanvas('aandm476', 'png');
};*/
