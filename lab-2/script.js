const apiKey = '210ab07fc80fab3cff180c501a22bf6f'; 

const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');

searchBtn.addEventListener('click', async () => {
  const city = cityInput.value.trim();
  if (!city) return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    document.getElementById('cityName').innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById('datetime').innerText = new Date().toLocaleString();
    document.getElementById('weatherIcon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById('description').innerText = data.weather[0].description;
    document.getElementById('temperature').innerText = `🌡️ Temp: ${data.main.temp}°C`;
    document.getElementById('humidity').innerText = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').innerText = `🌬️ Wind: ${data.wind.speed} km/h`;

    document.getElementById('weatherCard').classList.remove('hidden');
    document.getElementById('errorMsg').classList.add('hidden');
  } catch (err) {
    document.getElementById('errorMsg').innerText = err.message;
    document.getElementById('errorMsg').classList.remove('hidden');
    document.getElementById('weatherCard').classList.add('hidden');
  }
});
