const API_KEY ="81eb73320c5f5944dd6bef649712ae92";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(city){
      
            // const city = "greater noida";
            const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            var data = await response.json();
            
             if(response.status === 404){
                document.querySelector(".error").style.display ="block";
                document.querySelector(".weather").style.display ="none";
             }else{

                console.log(data);

                document.querySelector(".city").innerHTML = `${data.name}` ;
                document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°c`;
                document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
                document.querySelector(".wind").innerHTML = `${data.wind.speed}km/h`;
    
                if(data.weather[0].main == "Clouds"){
                    weatherIcon.src = "images/clouds.png" ;
                }
                else if(data.weather[0].main == "Clear"){
                    weatherIcon.src = "images/clear.png" ;
                }
                else if(data.weather[0].main == "Rain"){
                    weatherIcon.src = "images/rain.png" ;
                }
                else if(data.weather[0].main == "Drizzle"){
                    weatherIcon.src = "images/drizzle.png" ;
                }
                else if(data.weather[0].main == "Mist" || data.weather[0].main == "Haze" ){
                    weatherIcon.src = "images/mist.png" ;
                }
                document.querySelector(".error").style.display ="none";
                document.querySelector(".weather").style.display ="block";
             }             
        
}

 searchBtn.addEventListener("click",()=>{
    const city = searchBox.value;
    getWeather(city);
 })


 // for current location of user 
 function getCurrentLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showCurrentPosition);
    }
    else{
        alert("Geolocation is not supported by this browser.");
    }
 }

 async function showCurrentPosition(position){

                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                console.log(lat,lon);
                
                

                const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
                var data = await response.json();
                
                console.log(data);

                document.querySelector(".city").innerHTML = `${data.name}` ;
                document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°c`;
                document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
                document.querySelector(".wind").innerHTML = `${data.wind.speed}km/h`;
    
                if(data.weather[0].main == "Clouds"){
                    weatherIcon.src = "images/clouds.png" ;
                }
                else if(data.weather[0].main == "Clear"){
                    weatherIcon.src = "images/clear.png" ;
                }
                else if(data.weather[0].main == "Rain"){
                    weatherIcon.src = "images/rain.png" ;
                }
                else if(data.weather[0].main == "Drizzle"){
                    weatherIcon.src = "images/drizzle.png" ;
                }
                else if(data.weather[0].main == "Mist" || data.weather[0].main == "Haze" ){
                    weatherIcon.src = "images/mist.png" ;
                }
                
 }

getCurrentLocation();