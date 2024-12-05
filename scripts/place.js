const APIkey = "caf53f91ee0b9b0e12e36bca4aa622f2";
const lat = 15.5061;
const lon = -88.025;
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`;
fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    const temperature = data.main.temp;
    document.getElementById("temp").innerText = temperature;
  });
