var flower;

var IRL;
var LSL;
var BDayS;
var GShow;
var IShow;

function preload() {
	flower = loadImage('images/Flower.jpg');
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.id('canvas');
	background(44, 50, 56);
}

function draw() {
	

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
