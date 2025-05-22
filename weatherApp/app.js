const input = document.querySelector("input");
const btn = document.getElementById("btn");
const icon = document.querySelector(".icon");
const Cname = document.querySelector(".name");
const temperature = document.querySelector(".temperature ");
const description = document.querySelector(".description");

btn.addEventListener("click", () => {
  let city = input.value;
  getWeather(city);
});

let getWeather = (city) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"28c96c55e2d0f4da8f7517f0ea902306"}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        alert("enter valied city");
      } else {
        const weatherIcon = data.weather[0].icon;
        icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weatherIcon}.png" alt="weather icon"/>`;

        const cityName = data.name;
        const countryName = data.sys.country;
        Cname.innerHTML = `${cityName}, ${countryName}`;

        let weatherTep = data.main.temp;
        weatherTep = weatherTep - 273;
        let temp = weatherTep.toFixed(2);
        temperature.innerHTML = `${temp}°C`;

        let weatherDec = data.weather[0].description;
        description.innerHTML = `${weatherDec}`;
      }
    });
};
