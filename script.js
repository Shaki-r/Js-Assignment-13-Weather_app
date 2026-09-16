//  <!-- <img style="display: none;" src="https://www.awxcdn.com/adc-assets/images/weathericons/v2a/4.svg" alt="">
//                     <img style="display: none;" src="https://www.awxcdn.com/adc-assets/images/weathericons/v2a/6.svg" alt=""></img>
const weatherInp=document.querySelector("#weather-inp")
const weatherImg=document.querySelector("#weather-img")
const temperature=document.querySelector(".temperature")
const description=document.querySelector(".description")
const humidity=document.querySelector("#humidity")
const wind=document.querySelector("#wind")
async function weatherInpSubmit(event){
    event.preventDefault(); 
    let city=weatherInp.value
      const response = await axios(
    `https://api.weatherapi.com/v1/current.json?key=60e0a3d2f152486e950213038260606&q=${city}`,
  );
  console.log(response)
  const condition = response.data.current.condition.text.toLowerCase();
  const tempVal = response.data.current.temp_c;

if (condition.includes("clear") || condition.includes("sunny")) {
    weatherImg.src = "https://www.accuweather.com/images/weathericons/v2a/01.svg";
} 
else if (condition.includes("patchy rain nearby") || condition.includes("cloudy") || condition.includes("patchy")) {
    weatherImg.src = "https://www.accuweather.com/images/weathericons/v2a/03.svg";
} 
else if (condition.includes("partly cloud")){
    weatherImg.src = "https://www.accuweather.com/images/weathericons/v2a/01.svg";
}
else if(condition.includes("light rain shower")){{
    weatherImg.src = " https://www.gstatic.com/weather/conditions/v1/svg/strong_thunderstorms_light.svg";
   
    }}

  temperature.innerHTML = `${tempVal}<span>°C</span>`;
  description.innerHTML=response.data.current.condition.text;
  humidity.innerHTML=response.data.current.humidity +"%"
  wind.innerHTML=response.data.current.wind_kph+"Km/h"
}