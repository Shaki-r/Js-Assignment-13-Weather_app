//  <!-- <img style="display: none;" src="https://www.awxcdn.com/adc-assets/images/weathericons/v2a/4.svg" alt="">
//                     <img style="display: none;" src="https://www.awxcdn.com/adc-assets/images/weathericons/v2a/6.svg" alt=""></img>
const weatherInp=document.querySelector("#weather-inp")
const weatherImg=document.querySelector("#weather-img")
const temperature=document.querySelector(".temperature")
const description=document.querySelector(".description")
const humidity=document.querySelector("#humidity")
const wind=document.querySelector("#wind")
const containerCtrl=document.querySelector(".container")
const cityName=document.querySelector(".city-name")
async function weatherInpSubmit(event){
    event.preventDefault(); 
    cityName.innerHTML=""
    const weatherBox=document.querySelector(".weather-box")
    const weatherDeatils=document.querySelector(".weather-details")
    const errorBox=document.querySelector(".not-found")
    let city=weatherInp.value
    containerCtrl.style.height="33rem"
   try{
        const response = await axios(
    `https://api.weatherapi.com/v1/current.json?key=60e0a3d2f152486e950213038260606&q=${city}`,
  );
  console.log(response)
  const dayShift=response.data.current.is_day;
  if(errorBox) errorBox.style.display = "none";
  if(weatherBox) weatherBox.style.visibility = "visible";
  if(weatherDeatils) weatherDeatils.style.visibility = "visible";
  const condition = response.data.current.condition.text.toLowerCase();
  
  const tempVal = response.data.current.temp_c;
 if(dayShift===1){
if (condition.includes("clear") || condition.includes("sunny")) {
    weatherImg.src = "https://www.accuweather.com/images/weathericons/v2a/01.svg";
} 
else if (condition.includes("patchy rain nearby") || condition.includes("cloudy") || condition.includes("patchy")) {
    weatherImg.src = "https://www.accuweather.com/images/weathericons/v2a/03.svg";
} 
else if (condition.includes("partly cloud")){
    weatherImg.src = "https://www.accuweather.com/images/weathericons/v2a/01.svg";
}
else if (condition.includes("rain")){
    weatherImg.src = "https://www.awxcdn.com/adc-assets/images/weathericons/v2a/18.svg";
}
else if(condition.includes("light rain shower")){{
    weatherImg.src = " https://www.gstatic.com/weather/conditions/v1/svg/strong_thunderstorms_light.svg";
   
    }}}
    else{
        
        if (condition.includes("clear") || condition.includes("sunny")) {
        weatherImg.src = "https://www.accuweather.com/images/weathericons/v2a/33.svg";
} 
else if (condition.includes("patchy rain nearby") || condition.includes("cloudy") || condition.includes("smoky")) {
    weatherImg.src = "https://www.accuweather.com/images/weathericons/v2a/35.svg";
} 
else if (condition.includes("rain")){
    weatherImg.src = "https://www.awxcdn.com/adc-assets/images/weathericons/v2a/18.svg";
}
else if (condition.includes("partly cloud")){
    weatherImg.src = "https://www.accuweather.com/images/weathericons/v2a/01.svg";
}
else if(condition.includes("light rain shower")){
    weatherImg.src = " https://www.gstatic.com/weather/conditions/v1/svg/strong_thunderstorms_light.svg";
   
    }

    }
    cityName.innerHTML=city;
  temperature.innerHTML = `${tempVal}<span>°C</span>`;
  description.innerHTML=response.data.current.condition.text;
  humidity.innerHTML=response.data.current.humidity +"%"
  wind.innerHTML=response.data.current.wind_kph+"Km/h"

   } catch(error){
    containerCtrl.style.height="25rem"
          if(weatherBox) weatherBox.style.visibility = "hidden";
        if(errorBox) errorBox.style.display = "flex";
        if(weatherDeatils) weatherDeatils.style.visibility = "hidden";

    }
   }
   function setAutomaticBackground(){
    const bodyElement = document.querySelector("body");
    const currentHour = new Date().getHours();
    if(currentHour>=6 && currentHour<18){
        bodyElement.style.backgroundImage="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxZ_mVdPM9E_X6u7ADXFy2JaD-6lgUyU-7zBNkNLVjtA&s=10)";
    }
    else{
         bodyElement.style.backgroundImage="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeq0MzYI89vV6qGDAhtlyJT3bFLDQqJ3BklcRERQl6_g&s=10)";
    }
   }
   setAutomaticBackground()
