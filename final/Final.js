var capture;
var canvas;
var button;
var picture;
// var backdrop = ['GS_Moon', 'GS_Sun', 'ZeroX', 'Gin', 'Gaara', 'Luffy'];
// var backdropSelect;
// var backdropChange;
var image1;

var hueSlider;
var satSlider;
var expSlider;

function preload() {
	image1 = loadImage('images/GS_Moon.png');
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.id('canvas');
	background(44,50,56);
	capture = createCapture(VIDEO);
	capture.size(1920, 1080);
	capture.hide();

	button = createButton('cheese');
	button.position(0, 550);
	button.mousePressed(cheese);

	// backdropSelect = createSelect();
	// backdropSelect.position(0, 500);
	// for (var i = 0; i < backdrop.length; i++) {
	// backdropSelect.option(backdrop[i]);
	// }
	// backdropSelect.changed(changebackdrop);
}

// function changebackdrop() {

// }

function draw() {
	capture.loadPixels();
	push();
	translate(width, 0);
	scale(-1.0, 1.0);
	image(capture, 0, 0, 640, 480);
	pop();

image(image1,0,0,640,480);

}

function cheese() {
	save('myCanvas.png');
	return false;
	redraw();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
