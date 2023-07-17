const weatherData = JSON.parse(localStorage.getItem('weatherData'));

const temperatureElement = document.querySelector('.temperature .number .b');
temperatureElement.textContent = weatherData.temperature.toFixed(0);

const humidityElement = document.querySelector('.humidity');
humidityElement.textContent = weatherData.humidity;

const nameElement = document.querySelector('.name');
nameElement.textContent = weatherData.name;

const windSpeedElement = document.querySelector('.windSpeed');
windSpeedElement.textContent = weatherData.windSpeed;
windSpeedElement.textContent = weatherData.windSpeed.toFixed(1);

const rainElement = document.querySelector('.rain');
rainElement.textContent = weatherData.rain;




const backButton = document.querySelector('#back-button');
backButton.addEventListener('click', () => {
  window.location.href = 'entrada.html';
});







