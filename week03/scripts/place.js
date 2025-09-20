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
function calculateWindChill(temperature, windSpeed) {
  if (temperature <= 10 && windSpeed > 4.8) {
    return (
      Math.round(
        13.12 +
          0.6215 * temperature -
          35.75 * Math.pow(windSpeed, 0.16) +
          0.3965 * temperature * Math.pow(windSpeed, 0.16)
      ) + "°C"
    );
  } else {
       return "N/A";
  }
}
fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    const windSpeed = data.wind.speed;
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windchill").innerText = windChill;
  });
