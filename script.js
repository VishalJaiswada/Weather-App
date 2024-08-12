console.log("Vishal Ji"); 

const API_KEY = "81eb73320c5f5944dd6bef649712ae92";

async function showWeather(){
    // let latitude = 15.3333 ;
    // let longitude = 74.0833 ;
    let city = "greater noida";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
    const data = await response.json();
    console.log("Weather data:->",data);

    // let newPara = document.createElement('p');
    // newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`
    
    // document.body.appendChild(newPara);
}

