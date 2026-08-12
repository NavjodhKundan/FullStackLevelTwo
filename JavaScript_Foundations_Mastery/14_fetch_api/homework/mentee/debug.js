// ============================================================
// 🐛  FETCH API — HOMEWORK  |  DEBUG TASKS
// ============================================================

const WEATHER_API = "https://api.open-meteo.com/v1/forecast";


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should fetch weather data and log the temperature.
// Instead it logs undefined. What's wrong?

fetch(WEATHER_API + "?latitude=51.51&longitude=-0.13&current_weather=true")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log("Temperature: " + data.temperature); // undefined
  })
  .catch(function(err) {
    console.error(err.message);
  });

// What's wrong ↓
// because there is no tempreture object defined. It is defined under current_weather
// Your fix ↓
// console.log("Temperature: " + data.current_weather.temperature);

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This fetch chain should log the city name and temperature.
// The second .then crashes. What's wrong?

fetch(WEATHER_API + "?latitude=40.71&longitude=-74.01&current_weather=true")
  .then(function(response) {
    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }
    // missing return
    response.json();
  })
  .then(function(data) {
    console.log("Temp: " + data.current_weather.temperature);
  })
  .catch(function(err) {
    console.error("Error:", err.message);
  });

// What's wrong ↓
// missing return 
// Your fix ↓
// return response.json();

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This function fetches weather for a city and renders a card.
// It has TWO bugs — one causes wrong data display, one causes
// a crash on a bad city key.

const CITIES = {
  "london": { name: "London", lat: 51.51, lon: -0.13 }
};

function fetchCity(cityKey) {
  const city = CITIES[cityKey];

  fetch(WEATHER_API + "?latitude=" + city.lat + "&longitude=" + city.lon + "&current_weather=true")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const temp = data.temperature; // Bug 1: wrong path to temperature
      console.log(city.name + ": " + temp + "°C");
    })
    .catch(function(err) {
      console.error(err.message);
    });
}

fetchCity("london");  // works (kinda)
fetchCity("tokyo");   // Bug 2: crashes before even fetching

// Bug 1 ↓
// wrong path
// Bug 2 ↓
// there is no such "tokyo" city defined in CITIES

// Your fix ↓
// const temp = data.current_weather.temperature;
// check if city is null if(!city) { return; }