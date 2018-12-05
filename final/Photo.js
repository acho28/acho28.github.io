var capture;
var canvas;
var button;
var picture;
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
	
	button = createButton('expanded options');
	button.position(width/2, 100);
	button.mousePressed(expand);

}

function draw() {
	push();
	translate(capture.width, 0);
	scale(-1.0, 1.0);
	image(capture, 0, 0, 640, 480);
	pop();

image(image1,0,0,640,480);

textSize(20);
fill(255);
text("Available backdrops:", width/2, 200);
text("GS_Moon (Current)", width/2, 225);
text("GS_Sun (Locked)", width/2, 250);
text("ZeroX (Locked)", width/2, 275);
text("Gin (Locked)", width/2, 300);
text("Gaara (Locked)", width/2, 325);
text("Luffy (Locked)", width/2, 350);

}

function cheese() {
	alert("You're capturing a LOW RES IMAGE!! To unlock access to HD BACKDROPS AND PHOTOS, go to checkout!");
	save('myCanvas.png');
	return false;
	redraw();
}

function expand(){
	if (confirm("Oops! Looks like you've hit the limit of your free usage! Head to checkout to purchase some cool options!")) {
    txt = "You pressed OK!";
	 window.location.href = "index3.html";
} else {
    txt = "You pressed Cancel!";

}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
