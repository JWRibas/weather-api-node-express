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

const temperatureminElement = document.querySelector('.temperaturemin');
temperatureminElement.textContent = weatherData.temperaturemin;
temperatureminElement.textContent = weatherData.temperaturemin.toFixed(0);

const temperaturemaxElement = document.querySelector('.temperaturemax');
temperaturemaxElement.textContent = weatherData.temperaturemax;
temperaturemaxElement.textContent = weatherData.temperaturemax.toFixed(0);

const sunriseElement = document.querySelector('.sunrise');
const sunriseDate = new Date(weatherData.sunrise * 1000);
const sunriseTime = sunriseDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
sunriseElement.textContent = sunriseTime;

const sunsetElement = document.querySelector('.sunset');
const sunsetDate = new Date(weatherData.sunset * 1000);
const sunsetTime = sunsetDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
sunsetElement.textContent = sunsetTime;

const timeElement = document.querySelector('.b14');

function updateTime() {
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    timeElement.textContent = currentTime;
}

setInterval(updateTime, 1000);



const backButton = document.querySelector('#back-button');
backButton.addEventListener('click', () => {
  window.location.href = 'entrada.html';
});







