var apiKey = '6c03a1931a75b88a1f2deda71ffad700'

//different api links, not sure which would work
//https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
///https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`

//need to add forecast function
//var urlWeatherForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;

var citySearchBar = document.querySelector('#city-search-bar');
var searchBtn = document.querySelector('#search-btn');
var weatherDisplay = document.querySelector('#weather-display')
var forecastDisplay = document.querySelector('#forecast-display')

searchBtn.addEventListener('click', function(event) {
    searchCity(event);
});

function searchCity(event) {
    event.preventDefault();
    var city = citySearchBar.value.trim();
    weather(city);
}

function weather(city) {
    
    var urlCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    fetch(urlCurrentWeather)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log("current weather: ", data)
            document.getElementById('city-name').innerText = data.name;
            document.getElementById('city-temp').innerText = data.main.temp;
            document.getElementById('city-humidity').innerText = data.main.humidity;
            document.getElementById('city-wind').innerText = data.wind.speed;
        })
        .catch((err) => console.log(err));
};

