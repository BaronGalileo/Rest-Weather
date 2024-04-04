import React, {useState}from "react";
import { YMaps, Map } from '@pbe/react-yandex-maps';
import axios from "axios";

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
        const url_city = `http://api.openweathermap.org/geo/1.0/reverse?lat=${x}&lon=${y}&limit=5&appid=${API_KEY}`
        const url_weather = `https://api.openweathermap.org/data/3.0/onecall?lat=${x}&lon=${y}&units=metric&appid=${API_KEY}`
        axios.all([getCity(url_city), getWeather(url_weather)]).then(axios.spread(function(city, weather) {
            let cityString = `В ${city.data[0].name} сегодня: ${weather.data.current.temp}°С,
                    скорость ветра:${weather.data.current.wind_speed} метр/сек, 
                    влажность: ${weather.data.current.humidity} %`;
            setCity(city = cityString)
        }))
    }




    return(
        <YMaps>
        <div>Выбери город на корте!</div>
        <Map onClick={clickOnMap} defaultState={{ center: [48.39, -4.486], zoom: 9 }} />
        <div>{city}</div>
        </YMaps>

    )
}

export default CoordsFromMap