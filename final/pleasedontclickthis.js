var door;
var bigtext;
var smalltext;


function preload(){
	door = loadImage('images/door.jpg');
	lawrence = loadImage('images/lawrence.png');
}

function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style("z-index", "-1");
	beginning();
}

function beginning() {
	background(door);
	Title = createElement('h1', "You seem to have lost your way. . .");
	createElement("br");
	
	firstOption = createA("#", "Go through the door");
	firstOption.position(width/3, height/2);
	createElement('br');
	secondOption = createA("#", "This doesn't feel right. Head back.");
	secondOption.position(width/3, height/2+50);

	firstOption.mousePressed(redPill);
	secondOption.mousePressed(bluePill1);
}

function redPill(){
	firstOption.hide();
	secondOption.hide();
	Title.hide();
	background(0);
	image(lawrence,width/2,0,600,522.6);
	
	Title.show();
	Title.html("You have a choice.");
	Title.position(width/4, height/4);
	
	firstOption = createA("#", "Learn the truth");
	firstOption.position(width/3-100, height/2);
	createElement('br');
	secondOption = createA("#", "This doesn't feel right. Head back.");
	secondOption.position(width/3-100, height/2+50);

	firstOption.mousePressed(redPill2);
	secondOption.mousePressed(bluePill2);
	
}

function redPill2(){
	firstOption.hide();
	secondOption.hide();
	Title.hide();
	background(0);
	
	Title.show();
	Title.html("I have your credit card, SSN, address and photos from your activated webcam on the app.");
	createElement('br');
	createElement('br');
	Title2 = createElement('p1',"You can pay me directly or I can publish all of your information. Choose.");
	createElement('br');
	createElement('br');
	Title3 = createElement('p2',"Nothing personal. Can't have you exposing me is all.");
	createElement('br');
	createElement('br');
	Title4 = createElement('p3',"What? Don't support the arts?");
	createElement('br');
	createElement('br');
	Title.position(width/17, height/4);
	Title2.position(width/3, height/2);
	Title3.position(width/2.65, height/1.75);
	Title4.position(width/2.33, height/1.5);
	
	
	firstOption = createA("#", "Pay up.");
	firstOption.position(width/2.1, height/1.33);
	
	firstOption.mousePressed(redPill3);
}

function redPill3(){
	firstOption.hide();
	secondOption.hide();
	Title.hide();
	Title2.hide();
	Title3.hide();
	Title4.hide();
	background(0);
	
	Title.show();
	Title.html("Allow me to escort you out.");
	Title.position(width/2.4, height/4);
	run = createElement('p1',"You feel a chill run down your spine. Run to safety.");
	run.position(width/2.33, height/2);
	window.open("http://localhost/final/Index3.html");
}

function bluePill1(){
	firstOption.hide();
	secondOption.hide();
	Title.hide();
	background(0);
	
	Title.show();
	Title.html("Good. . .");
	Title.position(width/2, height/4);
	run = createElement('p1',"You feel a chill run down your spine. Run to safety.");
	run.position(width/2.33, height/2);
	window.open("http://localhost/final/Index1.html");
}


function bluePill2(){
	firstOption.hide();
	secondOption.hide();
	Title.hide();
	background(0);
	
	Title.show();
	Title.html("Disappointing.");
	Title.position(width/2 -40, height/4);
	run = createElement('p1',"You feel a chill run down your spine. Run to safety.");
	run.position(width/2.33, height/2);
	window.open("http://localhost/final/Index1.html");
}
	
function draw(){
}
function windowResized() {
	canvas = createCanvas(windowWidth, windowHeight);
}
