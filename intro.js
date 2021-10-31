var opacityM = 0;
var opacityV = 0;
var opacityR = 0;
var opacityE = 0;
var bg = 0;
var notext;
var counter = 0;
var voyageFlag = 0;
var releaseFlag = 0;
var ESRBFlag = 0;
var tintFlag = 0;
var faderate = 350;
var ESRB;

function intro() {
  //setInterval(background(0), 5000);
  //must pass setInterval a function or it'll glitch
  /*if (introPart == 1) */background(bg);
  textFont(futura);
  textAlign(CENTER);
  textSize(18);
  fill(255, 255, 255, opacityM);
  text('The makers of the smash hit series Uncharted present', 270, 50);
  //setInterval(incOpacityM(), faderate);
  if (opacityM < 255) opacityM++;
  counter++;
  if (counter == 360) setTimeout(noTextBackground(), 5000);
  if (counter == 420) voyageFlag = 1;
  if (voyageFlag == 1) writeVoyage();
  if (counter == 480) releaseFlag = 1;
  if (releaseFlag == 1) writeRelease();
  if (tintFlag == 0) {
    //tint(255, 127);  
    tintFlag = 1;
  } 
}

function noTextBackground() { 
  bg = notext; 
  //image(ESRB, 0, 0, 540, 720);
}

function writeVoyage() {
  textSize(25);
  //dimensions 540x720
  fill(255, 255, 255, opacityV);
  //setInterval(incOpacityV(), faderate);
  if (opacityV < 255) opacityV++;
  text('An interstellar voyage through time and space begins with you', 25, 580, 490)
}

function writeRelease() {
  textSize(21);
  fill(255, 255, 255, opacityR);
  //setInterval(incOpacityR(), faderate);
  if (opacityR < 255) opacityR++;
  text('6 | 14 | 73', 270, 650);
}

