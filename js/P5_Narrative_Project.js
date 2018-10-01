var canvas;

//screen text
var preface
var greeting;
var title;
var firstOption;
var secondOption;
var thirdOption;
var userName;

//inputs
var nameInput;

//animation variables
var sunX;
var sunY;

var sunSlider;

//boolean
var firstScreen;
var walkToHome;
var sunAnimate;
var walkToSchool;
var whoopHisAss

//sounds
var welcome

//interaction
var button

function preload(){
	welcome = loadSound('sounds/Welcome.mp3');
	
}
	
function setup() {

	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style("z-index", "-1");

	beginning();
}

//Beginning + Restart
function beginning() {
	background(0);
	welcome.play();
	greeting = createElement('h1', "What is your name, Challenger?");
	createElement("br");

	nameInput = createInput("Input here.");
	nameInput.changed(startStory);
	createElement("br");
	
	button = createButton('Huh?');

}

//Story Start
function startStory() {
	greeting.hide();
	nameInput.hide();
	button.hide();
	welcome.stop();
	userName = createElement('h1', nameInput.value());
	title = createElement('h1', "You are a student. Go to school.");

	firstOption = createA("#", "Go to school");
	createElement('br');
	secondOption = createA("#", "Stay home");

	firstOption.mousePressed(toSchool);
	secondOption.mousePressed(toHome);
}

//Story Branch 2
function toHome() {
	walkToSchool = false
		walktoHome = true
		secondOption.hide();

	title.html("You stay at home. You have missed too many days of school and were expelled! What did you think would happen if you chose not to go to school? Not all hope is lost, though. There's always trade school! And many jobs don't NEED college degrees. . . although I think you need your high school diploma. You really should have listened to your mother when she said not to miss too many days of school but NOOOOOOOOOOOOOOOOOOOOOOOOoooooo YOU DIDN'T LISTEN. NOW RESET AND DO IT RIGHT THIS TIME!");
	firstOption.html('Start over');

	firstOption.mousePressed(startOver);
	if (startOver == true) {
		location.reload(true);
	} else {
		Location.reload(false);
	}
}

function startOver() {
	location.reload(true);
}

//Story Branch 1
function toSchool() {
	walkToSchool = true;
	userName.html(nameInput.value());

	title.html('You go to school. A fool has appeared and is preparing to assault you.');
	firstOption.html('Get ready to open a can of whoop-ass.');
	secondOption.html("Get on your hands and knees to beg for forgiveness.");

	firstOption.mousePressed(whoopAss);
	secondOption.mousePressed(forgiveMe);
}

//Story Branch 1-2
function forgiveMe() {

	title.html("He doesn't buy it. What do you do?");
	firstOption.html("You have $2.37, an old gummy worm and some pocket lint. Maybe he'll be happy with that?");
	secondOption.html("Get ready to open a can of whoop-ass.");

	firstOption.mousePressed(oopsDied);
	secondOption.mousePressed(whoopAss);
}

//Story Branch 1-2-1
function oopsDied() {
	secondOption.hide();

	title.html("Insulted at your paltry offer, he killed you. If this nation doesn't negotiate with terrorists, why should you? FIGHT BACK.");
	firstOption.html('Start over');

	firstOption.mousePressed(startOver);
	if (startOver == true) {
		location.reload(true);
	} else {
		Location.reload(false);
	}
}

//Loop back to Story Branch 1-1
function whoopAss() {
	walkToSchool = false;
	walktoHome = false;
	whoopHisAss = true;

	userName.html(nameInput.value());

	title.html('You are now locked in combat. Running away will ruin your reputation and is not an option. What do you do?');
	firstOption.html('RASENGAN.');
	secondOption.html('Go for the balls.');
	createElement('br');
	thirdOption = createA("#", 'Throw a punch.');

	firstOption.mousePressed(rasenganDied1);
	secondOption.mousePressed(ballsExpelled1);
	thirdOption.mousePressed(punchNext);
}

//Story Branch 1-1-1
function rasenganDied1() {
	secondOption.hide();
	thirdOption.hide();

	title.html("You've died. Try again.");
	firstOption.html('Start over');

	firstOption.mousePressed(startOver);
	if (startOver == true) {
		location.reload(true);
	} else {
		Location.reload(false);
	}
}

//Story Branch 1-1-2
function ballsExpelled1() {
	secondOption.hide();
	thirdOption.hide();

	title.html("He died. No one bothered you ever again. You were expelled from school and arrested on murder charges. Why must you be so extreme?");
	firstOption.html('Start over');

	firstOption.mousePressed(startOver);
	if (startOver == true) {
		location.reload(true);
	} else {
		Location.reload(false);
	}
}

//Story Branch 1-1-3
function punchNext() {
	thirdOption.hide();

	title.html('He dodged. You got punched in the face. What do you do?');
	firstOption.html('Go for the balls.');
	secondOption.html('Mike Tyson his ear.');

	firstOption.mousePressed(ballsExpelled2);
	secondOption.mousePressed(mikeTyson);
}

//Story Branch 1-1-3-1
function ballsExpelled2() {
	secondOption.hide();

	title.html("You were weakened so he didn't die. He just never walked again. No one bothered you after that but you were expelled. WHY.");
	firstOption.html('Start over');

	firstOption.mousePressed(startOver);
	if (startOver == true) {
		location.reload(true);
	} else {
		Location.reload(false);
	}
}

//Story Branch 1-1-3-2
function mikeTyson() {
	title.html('He is stunned. FINISH HIM.');
	firstOption.html('Pull out his spine and jump rope with it.');
	secondOption.html('Uppercut!');
	thirdOption = createA("#", 'RASENGAN!!!');

	firstOption.mousePressed(scorpionHell);
	secondOption.mousePressed(upperCut);
	thirdOption.mousePressed(rasenganDied2);
}

//Story Branch 1-1-3-2-1
function scorpionHell() {
	secondOption.hide();
	thirdOption.hide();

	title.html("You forfeit your soul and go to hell. You are now Scorpion.");
	firstOption.html("You've won? Start over.");

	firstOption.mousePressed(startOver);
	if (startOver == true) {
		location.reload(true);
	} else {
		Location.reload(false);
	}
}

//Story Branch 1-1-3-2-3
function rasenganDied2() {
	secondOption.hide();
	thirdOption.hide();

	title.html("THAT. IS. NOT. A. REAL. MOVE. You died.");
	firstOption.html("You died. Start over.");

	firstOption.mousePressed(startOver);
	if (startOver == true) {
		location.reload(true);
	} else {
		location.reload(false);
	}
}

//Story Branch 1-1-3-2-2
function upperCut() {
	secondOption.hide();
	thirdOption.hide();

	title.html("You gather your energy for one last push. You feel your body coil beneath you, your muscles rippling. You've trained for this, years of carrying backpacks and your parent's expectations on your shoulders. You shoot forward, almost invisible to the naked eye, as you break the sound barrier. His chin shoots upwards to stare at the sky and his axial vertebrae begin to collapse under the pressure of your strike. He flies upward, seemingly suspended in the air for ages, before he comes crashing back to the ground. You've won the fight. The principle awards you the highest honor for your badassery and you're immortalized in the school history books. You wake up. It was all a dream.");
	firstOption.html("You've won. Start over?");

	firstOption.mousePressed(startOver);
	if (startOver == true) {
		location.reload(true);
	} else {
		Location.reload(false);
	}
}

function WindowResized() {
	canvas = createCanvas(windowWidth, windowHeight);
}
