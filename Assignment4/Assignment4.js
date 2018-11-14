var capture;
var canvas;
var button;
var picture;
var backdrop = ['GS_Moon', 'GS_Sun', 'ZeroX', 'Gin', 'Gaara', 'Luffy'];
var backdropSelect;
var backdropChange;
var image1;
var image2;
var image3;
var image4;
var image5;
var image6;
var hueSlider;
var satSlider;
var expSlider;

function preload() {
	image1 = loadImage('images/GS_Moon.png');
	image2 = loadImage('images/GS_Sun.png');
	image3 = loadImage('images/ZeroX.png');
	image4 = loadImage('images/Gin.png');
	image5 = loadImage('images/Gaara.png');
	image6 = loadImage('images/Luffy.png');
}

function setup() {
	canvas = createCanvas(640, 480);
	canvas.id('canvas');
	capture = createCapture(VIDEO);
	capture.size(1920, 1080);
	capture.hide();
	
	button = createButton('cheese');
	button.position(0, 550);
	button.mousePressed(cheese);
	
	backdropSelect = createSelect();
	backdropSelect.position(0, 500);
	for (i = 0; i < backdrop.length; i++) {
		backdropSelect.option(backdrop[i]);
	}
	backdropSelect.changed(changebackdrop);

	hueSlider = createSlider(-1, 1, .4, .01);
	hueSlider.id('Hue');
	hueSlider.position (50, 575);
	satSlider = createSlider(-1, 1, 0, .01);
	satSlider.id('Saturation');
	satSlider.position (250, 575);
	expSlider = createSlider(-1, 1, 0, .01);
	expSlider.id('Exposure');
	expSlider.position (450,575);

	capture.id('webcam');
	var seriously = new Seriously();

	var src = seriously.source('#webcam');
	var target = seriously.target('#canvas');

	var hueSat = seriously.effect('hue-saturation');
	hueSat.hue = '#hueSlider';
	hueSat.saturation = '#satSlider';
	hueSat.source = src;
	target.source = hueSat;
	
	var exp = seriously.effect('exposure');
	exp.exposure = '#expSlider';
	exp.source = src;
	target.source = exp;

	seriously.go();
}

function changebackdrop() {
var item = backdropSelect.value();

}

function draw() {
	push();
	translate(width, 0);
	scale(-1.0, 1.0);
	image(capture, 0, 0, 640, 480);
	pop();

	if (i = 1) {
		image(image1, 0, 0, 640, 480);
	} else if (i = 2) {
		image(image2, 0, 0, 640, 480);
	} else if (i = 3) {
		image(image3, 0, 0, 640, 480);
	} else if (i = 4) {
		image(image4, 0, 0, 640, 480);
	} else if (i = 5) {
		image(image5, 0, 0, 640, 480);
	} else {
		image(image6, 0, 0, 640, 480);
	}
}

function cheese(){
  save('myCanvas.png');
  return false;
  redraw();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
