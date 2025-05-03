function getWeather() {
    const city = document.getElementById('cityInput').value;
    const resultDiv = document.getElementById('weatherResult');
    if (!city) {
        resultDiv.textContent = "Please enter a city name.";
        return;
    }
    resultDiv.textContent = "Loading...";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=YOUR_API_KEY&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                resultDiv.innerHTML = `
                    <strong>${data.name}</strong><br>
                    ${data.weather[0].description}<br>
                    Temp: ${data.main.temp}°C
                `;
            } else {
                resultDiv.textContent = "City not found.";
            }
        })
        .catch(() => {
            resultDiv.textContent = "Error fetching weather.";
        });
}
