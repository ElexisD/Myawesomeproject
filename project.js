let dateElement = document.querySelector("#date");
let currentTime = new Date();

let hours = currentTime.getHours();
if (hours < 10) {
    hours = `0${hours}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
    minutes = `0${minutes}`;
}
let dayIndex = currentTime.getDay();
let days = ["Sunday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];

dateElement.innerHTML = `${days[dayIndex]} ${hours}:${minutes}`;


function displayWeatherCondition(response) {
    console.log(response.data);
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#tempreature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#Humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = response.data.wind.speed;
    document.querySelector("#description").innerHTML = response.data.weather[0].main;
}
function search(city) {
    let apiKey = "3d15a45bf8e333977b505c53b8162fd9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    search(city);
}


let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("click", handleSubmit);
search("new york")