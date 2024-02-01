const apiKey = "fb203d45bde77cfc1e38265dff6943fb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const checkWeather = (async(city)=>{
   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   let data = await response.json();
   console.log(data);
   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c";
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
   document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
   if(data.weather[0].main == "Clouds"){
      weatherIcon.src = "Images/images/clouds.png"
   }
   else if(data.weather[0].main == "Clear"){
      weatherIcon.src = "Images/images/clear.png"
   }
   else if(data.weather[0].main == "Rain"){
      weatherIcon.src = "Images/images/rain.png"
   }
   else if(data.weather[0].main == "Drizzle"){
      weatherIcon.src = "Images/images/drizzle.png"
   }
   else if(data.weather[0].main == "Mist"){
      weatherIcon.src = "Images/images/mist.png"
   }
})
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})