var canvas;

var bgColor;

var name;

var paragraph;

var textInput;

var ellipseslider;

function setup(){
	
	canvas = createCanvas(windowWidth,windowHeight)
	canvas.position(0,0);
	canvas.style("z-index", "-1");
	bgColor = 200;

	//create a h1 element
	userName = createElement('h1','Listen to 긴 여름 생활 on Spotify and iTunes');
	//userName = createElement('h1','');
	//userName.position(100,10);
	
	//create a button element
	button = createButton("Change Color");
	button.mousePressed(changeColor);
	
	//create paragraph element
	paragraph = createP('Fire.');
	//check to see if the mouse hovers over paragraph
	//paragraph.mouseOver(changeColor);
	//paragraph.mousePressed(changeColor);
	paragraph.mouseOut(changeColor);
	
	//create text box
	textInput = createInput("Tell me how fire it is here.");
	//userName.html(textInput.value());
	//textInput.input(updateName);
	textInput.changed(updateName);
	textInput.changed(updateFontColor);
	
	createElement('br');
	//create a slider element
	ellipseSlider = createSlider(0,600,300);
	
	
}

function changeColor(){
	
	bgColor = color(random(255));
	
}

function updateFontColor(){
	
	paragraph.style("color","red");
	paragraph.style("font-size",bgColor);
	userName.style("color","red");
	
}

function updateName(){
	
	userName.html(textInput.value());
	
}

function draw(){
	background(bgColor);
	
	text(textInput.value(),50,100);
	ellipse(width/2,height/2,ellipseSlider.value());
	
	if(ellipseSlider.value() > 400){
		fill(255,0,0);
		userName.hide();
}else{
	userName.show();
	userName.position(ellipseSlider.value(),0);
	fill(255,0,0);
}
}
