const apiKey = "d4a7f428ee231bc458476c7b07d09cb4";
const btn = document.getElementById("submit");

btn.onclick = async function () {
  const city = document.getElementById("search").value;
  const weatherInfo = document.getElementById("weather-info");

  if (!city) {
    weatherInfo.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");

    const data = await res.json();
    console.log(data);

    const icon = data.weather[0].icon;
    const description = data.weather[0].description;
    const name = data.name;
    const temp = data.main.temp;
    const temp_min = data.main.temp_min;
    const temp_max = data.main.temp_max;
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const speed = data.wind.speed;

    weatherInfo.innerHTML = `
      <h2>Weather in ${name}</h2>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon">
      <p><strong>Description:</strong> ${description}</p>
      <p><strong>Temperature:</strong> ${temp}°C</p>
      <p><strong>Min Temp:</strong> ${temp_min}°C</p>
      <p><strong>Max Temp:</strong> ${temp_max}°C</p>
      <p><strong>Humidity:</strong> ${humidity}%</p>
      <p><strong>Pressure:</strong> ${pressure} hPa</p>
      <p><strong>Wind Speed:</strong> ${speed} m/s</p>
    `;
  } catch (error) {
    console.error(error);
    weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
  }
};
