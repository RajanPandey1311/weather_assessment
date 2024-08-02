$(document).ready(function() {
    $('#search-btn').click(function() {
        var cityName = $('#city-input').val();
        if (cityName) {
            fetchWeather(cityName);
        } else {
            alert("Please enter a city name.");
        }
    });

    function fetchWeather(cityName) {
        var apiKey = '3824319164d57e13a689ca1f8539e81a';
        var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

        $.ajax({
            url: apiUrl,
            method: 'GET',
            success: function(data) {
                $('#city-name').text(data.name);
                $('#temperature').text(`Temperature: ${data.main.temp} °C`);
                $('#humidity').text(`Humidity: ${data.main.humidity}%`);
                $('#wind-speed').text(`Wind Speed: ${data.wind.speed} m/s`);
                $('#weather-condition').text(`Condition: ${data.weather[0].description}`);
                $('#weather-info').show();
            },
            error: function() {
                alert("Error fetching data. Please try again.");
            }
        });
    }
});
