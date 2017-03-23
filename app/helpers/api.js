var axios = require('axios');

var apiKey = "b714ec74bbab5650795063cb0fdf5fbe";

function getCurrentWeather(city) {
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&appid=' + apiKey)
}

function getFiveDayForecast(city) {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&type=accurate&appid=' + apiKey + '&cnt=5')
}

var helpers = {
    getCityInfo: function (city) {
        return axios.all([getCurrentWeather(city), getFiveDayForecast(city)])
            .then(function (weather) {
                return [
                    weather[0].data, weather[1].data
                ]
            }).catch(function(err) {
                console.warn('Error in getCityInfo', err);
            })
    }
}

module.exports = helpers;