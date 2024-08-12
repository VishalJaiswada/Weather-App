console.log("Vishal Ji"); 

const API_KEY = "81eb73320c5f5944dd6bef649712ae92";

function renderWeatherInfo(data){
        let newPara = document.createElement('p');
        newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`
        
        document.body.appendChild(newPara);
}

async function fetchWeatherDetails(){
     
    try{
        let city = "mumbai";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        
        const data = await response.json();
        console.log("Weather data:->",data);
    
        renderWeatherInfo(data);
    }
    catch(error){
        console.error("Error in fetching data:->",error);
    }

}

async function getCustomWeatherDetails(){
     try{
        let latitude = 17.0033;
        let longitude = 18.3333;

        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        let data = await result.json();

        console.log(data);
     }
     catch(err){
        console.log("Error Found " , err);
     }
}


function  getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        console.log("No Geolocation Support");
    }
}

function showPosition(position){
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;
    console.log(lat);
    console.log(longi);
}