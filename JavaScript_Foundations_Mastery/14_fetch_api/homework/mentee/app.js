// ============================================================
// 🏠  FETCH API — HOMEWORK
// ============================================================
// Mini Project: Weather Dashboard
//
// Fetch real weather data from Open-Meteo (free, no API key).
// Render weather cards to the DOM.
// Handle loading states and errors.
//
// API: https://api.open-meteo.com/v1/forecast
// Params: latitude, longitude, current_weather=true
// ============================================================

// ============================================================
// CITY DATA — coordinates for each city in the dropdown
// ============================================================
const CITIES = {
  "new-york": { name: "New York", lat: 40.71, lon: -74.01 },
  london: { name: "London", lat: 51.51, lon: -0.13 },
  tokyo: { name: "Tokyo", lat: 35.68, lon: 139.69 },
  sydney: { name: "Sydney", lat: -33.87, lon: 151.21 },
  paris: { name: "Paris", lat: 48.85, lon: 2.35 },
  dubai: { name: "Dubai", lat: 25.2, lon: 55.27 },
};

const WEATHER_API = "https://api.open-meteo.com/v1/forecast";

// ============================================================
// WEATHER CODE HELPER
// ============================================================
// Open-Meteo uses WMO weather codes. This function converts
// a code to a human-readable label and emoji.
function getWeatherDescription(code) {
  if (code === 0) {
    return { label: "Clear sky", icon: "☀️" };
  }
  if (code >= 1 && code <= 3) {
    return { label: "Partly cloudy", icon: "⛅" };
  }
  if (code >= 45 && code <= 48) {
    return { label: "Foggy", icon: "🌫️" };
  }
  if (code >= 51 && code <= 67) {
    return { label: "Rain", icon: "🌧️" };
  }
  if (code >= 71 && code <= 77) {
    return { label: "Snow", icon: "❄️" };
  }
  if (code >= 80 && code <= 82) {
    return { label: "Rain showers", icon: "🌦️" };
  }
  if (code >= 95 && code <= 99) {
    return { label: "Thunderstorm", icon: "⛈️" };
  }
  return { label: "Unknown", icon: "🌡️" };
}

// ----------------------------------------------------------
// TASK 1 — safeFetch helper
// ----------------------------------------------------------
// Declare a function called safeFetch.
// Parameter: url (string)
//
// Returns a fetch chain that:
//   1. Checks response.ok — if false, throws an Error
//   2. Parses the body with response.json()
//   3. Returns the result (so callers can .then chain it)
//
// This is the same helper from the live class.

function safeFetch(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    return response.json();
  })
}

// ----------------------------------------------------------
// TASK 2 — DOM helpers
// ----------------------------------------------------------
// Declare these short helper functions:
//
// getEl(id)           → document.getElementById(id)
// showSpinner(msg)    → remove "hidden" from #loading-spinner
//                       set #loading-message textContent to msg
// hideSpinner()       → add "hidden" to #loading-spinner
// showError(msg)      → remove "hidden" from #error-box
//                       set #error-message textContent to msg
// hideError()         → add "hidden" to #error-box
// showStatus(msg, type) → set #status-bar className and message
// hideStatus()        → add "hidden" to #status-bar

function getEl(id) {
  return document.getElementById(id);
}

function showSpinner(msg) {
  const loadingSpinner = document.querySelector("#loading-spinner");
  loadingSpinner.classList.remove("hidden");
  loadingSpinner.textContent = msg;
}

function hideSpinner() {
  const loadingSpinner = document.querySelector("#loading-spinner");
  loadingSpinner.classList.add("hidden");
}

function showError(msg) {
  const errorBox = document.querySelector("#error-box");
  errorBox.classList.remove("hidden");
  errorBox.textContent = msg;
}

function hideError() {
  const errorBox = document.querySelector("#error-box");
  errorBox.classList.add("hidden");
}

function showStatus(msg, type) {
  const statusBar = document.querySelector("#status-bar");
  if (type) { statusBar.classList.add(type) };
  statusBar.textContent = msg;
}

function hideStatus() {
  const statusBar = document.querySelector("#status-bar");
  statusBar.classList.add("hidden");
}

// ----------------------------------------------------------
// TASK 3 — buildWeatherUrl
// ----------------------------------------------------------
// Declare a function called buildWeatherUrl.
// Parameter: city (object with lat, lon properties)
//
// Returns the full API URL with query parameters:
//   WEATHER_API + "?latitude=" + city.lat
//              + "&longitude=" + city.lon
//              + "&current_weather=true"

console.log("----------Task 3----------");
function buildWeatherUrl(city) {
  return WEATHER_API + "?latitude=" + city.lat + "&longitude=" + city.lon
    + "&current_weather=true";
}

// Test it:
console.log(buildWeatherUrl(CITIES["london"]));
// Expected: "https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&current_weather=true"

// ----------------------------------------------------------
// TASK 4 — createWeatherCard
// ----------------------------------------------------------
// Declare a function called createWeatherCard.
// Parameters: cityName (string), data (parsed API response)
//
// The weather data lives at data.current_weather:
//   data.current_weather.temperature   → number (°C)
//   data.current_weather.windspeed     → number (km/h)
//   data.current_weather.winddirection → number (degrees)
//   data.current_weather.weathercode   → number (WMO code)
//
// Build and return a <div class="weather-card"> containing:
//   1. <p class="city-name"> → cityName
//   2. <p class="coord-text"> → "Lat: " + lat + " | Lon: " + lon
//      (from data.latitude and data.longitude)
//   3. <span class="weather-icon"> → getWeatherDescription(code).icon
//   4. <p class="temperature"> → temperature + "°C"
//   5. <p class="condition"> → getWeatherDescription(code).label
//   6. A <div class="weather-stats"> containing two stat divs:
//      Wind speed: windspeed + " km/h"
//      Wind dir:   winddirection + "°"
//
// Each stat div has:
//   <p class="stat-label">WIND SPEED</p>
//   <p class="stat-value">12 km/h</p>
//
// Return the card.

function createWeatherCard(cityName, data) {
  const weatherCard = document.createElement("div");
  weatherCard.classList.add("weather-card");

  const cityNameP = document.createElement("p");
  cityNameP.classList.add("city-name");
  cityNameP.textContent = cityName;

  const coordText = document.createElement("p");
  coordText.classList.add("coord-text");
  coordText.textContent = "Lat: " + data.latitude + " | Lon: " + data.longitude;

  const weatherIcon = document.createElement("span");
  weatherIcon.classList.add("weather-icon");
  weatherIcon.textContent = getWeatherDescription(data.current_weather.weathercode).icon;

  const weatherTemperature = document.createElement("p");
  weatherTemperature.classList.add("temprature");
  weatherTemperature.textContent = data.current_weather.temperature + "°C";

  const weatherCondition = document.createElement("p");
  weatherCondition.classList.add("condition");
  weatherCondition.textContent = getWeatherDescription(data.current_weather.weathercode).label;

  const weatherStat = document.createElement("div");
  weatherStat.classList.add("weather-stat");

  const statLabel = document.createElement("p");
  statLabel.classList.add("stat-label");
  statLabel.textContent = data.current_weather.windspeed + " km/h";

  const statValue = document.createElement("p");
  statValue.classList.add("stat-value");
  statValue.textContent = data.current_weather.winddirection + "°";

  weatherStat.appendChild(statLabel);
  weatherStat.appendChild(statValue);

  weatherCard.appendChild(cityNameP);
  weatherCard.appendChild(coordText);
  weatherCard.appendChild(weatherIcon);
  weatherCard.appendChild(weatherTemperature);
  weatherCard.appendChild(weatherCondition);
  weatherCard.appendChild(weatherStat);

  return weatherCard;
}

// ----------------------------------------------------------
// TASK 5 — fetchWeatherForCity
// ----------------------------------------------------------
// Declare a function called fetchWeatherForCity.
// Parameter: cityKey (string — the key in CITIES object)
//
// Inside:
//   1. Get the city object: CITIES[cityKey]
//   2. If no city found → showError("City not found") and return
//   3. Show a temporary loading card in the grid:
//      Create a <div class="card-loading" id="loading-" + cityKey>
//      With content: <div class="spin"></div><span>Loading [city.name]...</span>
//      Append to #weather-grid
//   4. Build the URL: buildWeatherUrl(city)
//   5. Call safeFetch(url):
//      .then(function(data) {
//        Remove the loading card: document.getElementById("loading-" + cityKey)?.remove()
//        Build the real card: createWeatherCard(city.name, data)
//        Append it to #weather-grid
//      })
//      .catch(function(err) {
//        Remove loading card
//        showError("Failed to fetch " + city.name + ": " + err.message)
//      })

function fetchWeatherForCity(cityKey) {
  const cityObject = CITIES[cityKey];
  if (!cityObject) {
    showError("City not found");
    return;
  }

  const cardLoading = document.createElement("div");
  cardLoading.classList.add("card-loading");
  cardLoading.id = "loading-" + cityKey;
  const spin = document.createElement("div");
  spin.classList.add("spin");
  const loadingName = document.createElement("span");
  loadingName.textContent = `Loading ${cityObject.name}...`;
  const weatherGrid = document.querySelector("#weather-grid");
  cardLoading.appendChild(spin);
  cardLoading.appendChild(loadingName);
  weatherGrid.appendChild(cardLoading);

  const url = buildWeatherUrl(cityObject);

  const checkUrl = safeFetch(url);

  checkUrl.then(function (data) {
    document.getElementById("loading-" + cityKey)?.remove()
    const card = createWeatherCard(cityObject.name, data)
    weatherGrid.appendChild(card);
  })
    .catch(function (err) {
      document.getElementById("loading-" + cityKey)?.remove()
      showError("Failed to fetch " + cityObject + ": " + err.message)
    })

}

// ----------------------------------------------------------
// TASK 6 — handleFetchWeather (button click)
// ----------------------------------------------------------
// Declare a function called handleFetchWeather.
//
// Inside:
//   1. Get the selected city key from #city-select
//   2. If empty → showError("Please select a city") and return
//   3. hideError()
//   4. Call fetchWeatherForCity(cityKey)
//
// Wire it up:
//   document.getElementById("fetch-weather-btn")
//     .addEventListener("click", handleFetchWeather)

function handleFetchWeather() {
  const citySelect = document.getElementById("city-select");
  const cityKey = citySelect.value;
  if (!cityKey) {
    showError("Please select a city");
    return;
  }
  hideError();
  fetchWeatherForCity(cityKey);
}

document
  .getElementById("fetch-weather-btn")
  .addEventListener("click", handleFetchWeather);

// ----------------------------------------------------------
// TASK 7 — fetchAllCities
// ----------------------------------------------------------
// Declare a function called fetchAllCities.
//
// Inside:
//   1. Clear the grid: getEl("weather-grid").innerHTML = ""
//   2. hideError()
//   3. showStatus("🌍 Fetching all cities...", "")
//   4. Get all city keys: Object.keys(CITIES)
//   5. For each key, call fetchWeatherForCity(key)
//      (This fires 6 parallel fetch calls — they all run at once)
//   6. showStatus("✅ All cities loaded", "success")
//      ⚠️  Note: the status shows immediately — the fetches are still
//      running. The cards appear as each one completes.
//      This is the nature of async code — we'll see Promise.all in Axios.
//
// Wire it up:
//   document.getElementById("fetch-all-btn")
//     .addEventListener("click", fetchAllCities)

function fetchAllCities() {
  getEl("weather-grid").innerHTML = "";
  hideError();
  showStatus("🌍 Fetching all cities...", "");
  const allCityKeys = Object.keys(CITIES);
  allCityKeys.forEach(key => {
    fetchWeatherForCity(key);
  })
  showStatus("✅ All cities loaded", "success");

}

document
  .getElementById("fetch-all-btn")
  .addEventListener("click", fetchAllCities);

// ----------------------------------------------------------
// TASK 8 — clear all
// ----------------------------------------------------------
// Wire up #clear-btn:
//   - Clear the grid
//   - hideError(), hideStatus()
//   - Reset #city-select to ""

document.getElementById("clear-btn").addEventListener("click", function () {
  getEl("weather-grid").innerHTML = "";
  hideError();
  hideStatus();
  getEl("city-select").selectedIndex = 0;
});

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — Promise.all for parallel fetches
// ----------------------------------------------------------
// fetchAllCities fires 6 requests and shows "All cities loaded"
// BEFORE any of them complete. That's misleading.
//
// Use Promise.all to wait for ALL fetches to complete first:
//
// Declare a function called fetchAllCitiesParallel.
//
// Inside:
//   1. Clear the grid
//   2. showSpinner("Fetching all cities...")
//   3. Get all city keys with Object.keys(CITIES)
//   4. Build an array of fetch promises:
//      const promises = Object.keys(CITIES).map(function(key) {
//        return safeFetch(buildWeatherUrl(CITIES[key]))
//          .then(function(data) {
//            return { key, data };  // wrap with the key so we know which city
//          });
//      });
//   5. Promise.all(promises)
//      .then(function(results) {
//        results.forEach(function(result) {
//          const city = CITIES[result.key];
//          const card = createWeatherCard(city.name, result.data);
//          getEl("weather-grid").appendChild(card);
//        });
//        showStatus("✅ All " + results.length + " cities loaded", "success");
//      })
//      .catch(function(err) {
//        showError("One or more cities failed: " + err.message);
//      })
//      .finally(() => hideSpinner());
//
// Write a comment: what does Promise.all do differently from
// calling fetchWeatherForCity in a loop?
// Promise.all gives all the request at the same time where as loop goes one at a time. It 
// takes one city and display data and then move to next one. Promise.all gets all data and then displays.

function fetchAllCitiesParallel() {
  getEl("weather-grid").innerHTML = "";
  showSpinner("Fetching all cities...");
  const allCityKeys = Object.keys(CITIES);
  const promises = Object.keys(CITIES).map(function (key) {
    return safeFetch(buildWeatherUrl(CITIES[key]))
      .then(function (data) {
        return { key, data };
      });
  });
  Promise.all(promises)
    .then(function (results) {
      results.forEach(function (result) {
        const city = CITIES[result.key];
        const card = createWeatherCard(city.name, result.data);
        getEl("weather-grid").appendChild(card);
      });
      showStatus("✅ All " + results.length + " cities loaded", "success");
    })
    .catch(function (err) {
      showError("One or more cities failed: " + err.message);
    })
    .finally(() => hideSpinner());
}
