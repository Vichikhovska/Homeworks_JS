const API_KEY = "abd811c2ad73858e03cfc69be5ad5ea5";
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=Kherson,ua&appid=${API_KEY}`;

const button = document.querySelector("button");
button.addEventListener("click", getWeather);

function getWeather() {     // з цим я так до кінця і не розібралась. просто довго гуглила як  це зробити і ось
  const weatherData = localStorage.getItem("weatherData");
  if (weatherData) {
    const parsedData = JSON.parse(weatherData);
    const timestamp = parsedData.timestamp;
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - timestamp;
    const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));

    if (hoursDiff < 2) {
      const data = parsedData.data;
      displayWeather(data);
      return;
    }
  }

  fetch(BASE_URL)         // так само розумію частково, але вже краще
    .then((response) => response.json())
    .then((data) => {
      const weatherData = {
        timestamp: new Date().getTime(),
        data: data,
      };
      localStorage.setItem("weatherData", JSON.stringify(weatherData));

      console.log(data);
      displayWeather(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

function displayWeather(data) {     // з цим проблем нема
  const weather = document.querySelector(".weather");
  weather.innerHTML = "";

  const name = data.name;
  const temperature = data.main.temp;
  const description = data.weather[0].description;

  const nameElement = document.createElement("p");
  nameElement.textContent = `${name}`;
  weather.appendChild(nameElement);

  const temperatureElement = document.createElement("p");
  temperatureElement.textContent = `Temperature: ${temperature}°C`;
  weather.appendChild(temperatureElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = `Description: ${description}`;
  weather.appendChild(descriptionElement);
}
