import React, {useState}from "react";
import { YMaps, Map } from '@pbe/react-yandex-maps';
import axios from "axios";
import Country from "./Country";

const API_KEY = 'ed5b13e0fff6479e50160511418fb26e'




function CoordsFromMap() {

    let [city, setCity] = useState();




    function getCity(path) {
        return axios.get(path)
        }
          
    function getWeather(path) {
        return axios.get(path)
        }

    function clickOnMap(e) {
        let x = e.get('coords')[0]
        let y = e.get('coords')[1]
        console.log(e)
        let time = Math.round(new Date().getTime()/1000.0)
        const url_city = `http://api.openweathermap.org/geo/1.0/reverse?lat=${x}&lon=${y}&limit=5&appid=${API_KEY}`
        const url_weather = `https://api.openweathermap.org/data/3.0/onecall?lat=${x}&lon=${y}&dt=${time}&units=metric&appid=${API_KEY}`
        axios.all([getCity(url_city), getWeather(url_weather)]).then(axios.spread(function(city, weather) {
            let cityString = `В ${city.data[0].name} сегодня: ${weather.data.current.temp}°С,
                    скорость ветра:${weather.data.current.wind_speed} метр/сек, 
                    влажность: ${weather.data.current.humidity} %`;
            setCity(city = cityString)
            
        }))
    }




    return(
        <YMaps>
        <Country/>
        <div>Выбери город на корте!</div>
        <Map onClick={clickOnMap} defaultState={{ center: [53.89, 27.535], zoom: 9 }} />
        <div>{city}</div>
        </YMaps>

    )
}

export default CoordsFromMap