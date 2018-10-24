var weatherData;
var canvas;
var windSpeed;
var windX = 0;
var fillTemp

var randSong;

var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=d6f703337cc7f0b001ad6d24d24908dd";

var sel;
var citySelect;
var submit;
var item;

var api = "https://api.openweathermap.org/data/2.5/weather?q=";
var city = "Chicago";
var apiKey = "&units=imperial&appid=d6f703337cc7f0b001ad6d24d24908dd";

var songData;

function preload() {
	loadJSON("https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=d6f703337cc7f0b001ad6d24d24908dd", gotWeatherData);
	songData = loadJSON("js/spotify.json");
	spaceBG = loadImage('./images/space.png');
}

function updateWeather() {
	loadJSON(weatherURL, gotWeatherData);
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style("z-index", "-1");
	windX = windowWidth / 2

		print(songData);

	allSongs = songData.Songs;
	print(allSongs.length);

	greeting = createElement('h1', "Where are you?");
	createElement("br");

	citySelect = createSelect();
	citySelect.position(10, 80);
	// citySelect.option("");
	citySelect.option("Chicago");
	citySelect.option("New York");
	citySelect.option("Ann Arbor");
	citySelect.option("Seoul");
	citySelect.option("Busan");
	citySelect.option("Daegu");
	citySelect.changed(changeCity);

	createElement("br");
	createElement("br");
	greeting = createElement('h1', "What's your mood?");
	createElement("br");

	sel = createSelect();
	sel.position(10, 200);
	sel.option("sad");
	sel.option("happy");
	sel.option("angry");
	sel.option("emotionally ambiguous");
	button = createButton('submit');
	button.position(180, 200);
	button.mousePressed(changed);
	createElement("br");

	console.log(songData.Songs.length);
	randSong = int(random(0, songData.Songs.length));

}

function changeCity() {
	var weatherURL = api + citySelect.value() + apiKey;
	loadJSON(weatherURL, gotWeatherData);

}

function gotWeatherData(data) {

	weatherData = data;
	console.log(weatherData);
	console.log(weatherData.weather[0].description);
	console.log(weatherData.main.temp);
	console.log(weatherData.wind.speed);
}

function changed() {
	var item = sel.value();
	randSong = int(random(0, songData.Songs.length));
}

function draw() {
	background(255);
	image(spaceBG, 0, 400, 2000, 100);
	textSize(15);
	fill(0);
	if (citySelect.changed) {
		text("I see " + weatherData.weather[0].description + " in " + citySelect.value() + "." + " The temperature is " + weatherData.main.temp + " degrees Fahrenheit and wind speed is " + weatherData.wind.speed + " MPH.", 10, 140);

		if (button.mousePressed) {
			text("Since you're feeling " + sel.value() + " in these weather conditions, you should listen to " + songData.Songs[randSong] + ". Sounds like it could be a perfect fit!", 10, 250);
			text("Follow @boundless_endo on Instagram for more great music recommendations!", 10, 265);

		}
	}
	textSize(50);
	fill(random(0,255), random(0,255), random(0,255));
	text("Mood Music", windowWidth/2, 460);
}

function WindowResized() {
	canvas = createCanvas(windowWidth, windowHeight);
}
