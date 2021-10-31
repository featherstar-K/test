var futura;
var scene = 0;
var introPart = 1;

function preload() {
  futura = loadFont('FuturaPTBook.otf');
  notext = loadImage('Game Poster No Text 2 compressed.png');
  ESRB = loadImage('ESRB & Companies compressed.png');
}

function setup() {
  createCanvas(540, 720);
  //setTimeout(function() {bg = notext;}, 5000);
}

function draw() {
  if (scene == 0) intro();
}

