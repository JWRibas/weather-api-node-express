const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();
const port = 3000;
const apiKey = process.env.API;
const lang = 'pt_br';
const units = 'metric';

app.use(express.static('public'));

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

// Rota para a página entrada.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/entrada.html');
});

// Rota para a página index.html
app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/weather', (req, res) => {
  const city = req.query.city;
  axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}&lang=${lang}&units=${units}`)
    .then(response => {
      const data = response.data;
      const filteredData = {
        name: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        rain: data.rain ? data.rain['3h'] : 0
      };
      res.json(filteredData);
    })
    
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});


