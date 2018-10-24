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

var api = "https://api.openweathermap.org/data/2.5/weather?q=";
var city = "Chicago";
var apiKey = "&units=imperial&appid=d6f703337cc7f0b001ad6d24d24908dd";

function preload() {
	loadJSON("https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=d6f703337cc7f0b001ad6d24d24908dd", gotWeatherData);
	//spotify = loadJSON("js/spotify.json");
}

function updateWeather() {
	loadJSON(weatherURL, gotWeatherData);
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style("z-index", "-1");
	windX = windowWidth / 2

		greeting = createElement('h1', "Where are you?");
	createElement("br");

	citySelect = createSelect();
	citySelect.position(10, 80);
	citySelect.option("");
	citySelect.option("Chicago");
	citySelect.option("New York");
	citySelect.option("Ann Arbor");
	citySelect.option("Seoul");
	citySelect.option("Busan");
	citySelect.option("Daegu");
	citySelect.changed(changeCity);

	//setInterval(updateWeather, 10000);
	//randDino =
	//console.log(dinos.dinosaurs.length);
	//randSong = int(random(0, dinos.dinosaurs.length));
}

function changeCity() {
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
	// redraw();

}

function gotWeatherData(data) {

	weatherData = data;
	console.log(weatherData);
	console.log(weatherData.weather[0].description);
	console.log(weatherData.main.temp);
	console.log(weatherData.wind.speed);
}

function draw() {
	background(255);
	textSize(20);
	if (citySelect.changed == true) {
		text("It is " + weatherData.weather[0].description + " in " + citySelect.value() + "." + " The temperature is " + weatherData.main.temp + " degrees Fahrenheit and wind speed is " + weatherData.wind.speed + " MPH.", 10, 140);
	}

	// fillTemp = weatherData.main.temp;
	// var mappedFillTemp;
	// mappedFillTemp = map(fillTemp, 0, 105, 0, 255);
	// fill(mappedFillTemp, 30, 150);
	// windSpeed = weatherData.wind.speed;
	// windX = windX + windSpeed;
	// rect(windX, windowHeight / 2, 50, 50);
	// text("The Wombat is seeing " + weatherData.weather[0].description, 10, 40);
	// text("The " + dinos.dinosaurs[randDino] + " is seeing " + weatherData.weather[0].description, 10, 40);

	// if (windX > windowWidth) {
	// windX = 0;
	// }
	// }
}

// function changed() {
	// var item = sel.value();
	// if (item = 1) {}
	// if (item = 2) {}
	// if (item = 3) {}
	// if (item = 4) {}
	// redraw();
// }
