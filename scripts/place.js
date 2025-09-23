const APIkey = "caf53f91ee0b9b0e12e36bca4aa622f2";
const lat = 15.5061;
const lon = -88.025;
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`;
fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    let temperature = data.main.temp;
    document.getElementById("temp").innerText = temperature;
  });
/*Display the current weather conditions in the "Weather" section of the page.
  The weather conditions should be displayed when the page loads.*/
fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    /*Display the current weather conditions in the "Weather" section of the page.
      The weather conditions should be displayed when the page loads.*/
    let conditions = data.weather
      .map((weather) => weather.description)
      .join(", ");
    document.getElementById("condition").innerText = conditions;
  });
let temperature; // Declare temperature variable in a broader scope
fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    temperature = data.main.temp;
    document.getElementById("temp").innerText = temperature;
  });
/*Display the windchill factor in the "Weather" section of the page.
  The windchill factor should be calculated and displayed when the page loads.
  If the temperature is 10°C or lower and the wind speed is 4.8 km/h or higher, 
  the windchill factor should be displayed.*/
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
    //display "N/A", which means "not applicable"
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
//end of windchill function



