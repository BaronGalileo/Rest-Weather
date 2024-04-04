import React, { useState } from "react";
import axios from "axios";
import InformationTable from "./InformationTable";

const API_KEY = 'ed5b13e0fff6479e50160511418fb26e'



function Test(props) {
  let [city, setCity] = useState();
  let [weather, setWeather] = useState();
  
  let time = Math.round(new Date().getTime()/1000.0)



function getCity(path) {

  return axios.get(path)
}

function getWeather(path) {
    return axios.get(path)
}
  

    function click() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                const url_city = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${API_KEY}`
                const url_weather = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&dt=${time}&units=metric&appid=${API_KEY}`
                axios.all([getCity(url_city), getWeather(url_weather)]).then(axios.spread(function(city, weather) {
                    // let cityString = `В ${city.data[0].name} сегодня: ${weather.data.current.temp}°С,
                    //  скорость ветра:${weather.data.current.wind_speed} метр/сек, 
                    //  влажность: ${weather.data.current.humidity} %`;
                    setCity(city.data)
                    console.log("city.data",city.data)
                    setWeather(weather.data)
                    console.log("weather.data",weather.data)

                }))
            })
        }
    }


function forecast() {
    

    return(

        console.log("ghbdtn")
         
    )
} 


   
    return(
        <>
        <button onClick={click}>{props.name}</button>
        <div>{city ? city[0].name : ""}</div>
        
        {city && 
        <>
        <button onClick={forecast} >Прогноз погоды в {city[0].name} на 5 дней</button>
        <InformationTable infoForecast={weather}/>
        
        </>
        }
        {/* <div>{city &&
            weather.map((value, index) => {
                return (
                    <div className="weather" key={index}>
                        <button>Код страны: {value.daily[index].temp} -- {value}</button>
                    </div>
                )})}
                </div> */}
        </>
    )
}

export default Test