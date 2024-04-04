import React, { useState } from "react";
import axios from "axios";

const API_KEY = 'ed5b13e0fff6479e50160511418fb26e'



function Test(props) {
  let [cityt, setCityt] = useState();



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
                const url_weather = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
                axios.all([getCity(url_city), getWeather(url_weather)]).then(axios.spread(function(city, weather) {
                    console.log(weather.data)
                    let cityString = `В ${city.data[0].name} сегодня: ${weather.data.current.temp}°С,
                     скорость ветра:${weather.data.current.wind_speed} метр/сек, 
                     влажность: ${weather.data.current.humidity} %`;
                    setCityt(cityt = cityString)

                }))
            })
        }
    }

  
   


   
    return(
        <>
        <button onClick={click}>{props.name}</button>
        <div>{cityt}</div>
        </>
    )
}

export default Test