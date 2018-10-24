var weatherData;

var api = "https://api.openweathermap.org/data/2.5/weather?q=";
var city = "Chicago";
var apiKey = "&units=imperial&appid=d6f703337cc7f0b001ad6d24d24908dd";

var citySelect;

function setup(){
	createCanvas(500,500);
	
	citySelect = createSelect();
	citySelect.position(10,10);
	citySelect.option("Chicago");
	citySelect.option("New York");
	citySelect.option("Ann Arbor");
	citySelect.option("Seoul");
	citySelect.option("Busan");
	citySelect.option("Daegu");
	citySelect.changed(changeCity);
}

function changeCity(){
	var weatherURL = api + citySelect.value() + apiKey;
	loadJSON(weatherURL, gotWeatherData);
}

function gotWeatherData(data){
	weatherData = data;
	console.log(weatherData);
}

function draw(){
	background(0);
	
	if(weatherData){
		ellipse(width/2, height/2, weatherData.main.temp, weatherData.main.temp);
	}
}