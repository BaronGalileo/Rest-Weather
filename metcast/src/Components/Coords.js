import React, {useState}from "react";
import { YMaps, Map } from '@pbe/react-yandex-maps';
import axios from "axios";




function CoordsFromMap() {

    let [temp, setTemp] = useState();
    let [city, setCity] = useState();

    function dataFromOpenWeather(e) {
        let x = e.originalEvent.map._bounds[0][0]
        let y = e.originalEvent.map._bounds[0][1]
        return new Promise((resolve, reject) => {

            const path = `https://api.openweathermap.org/data/3.0/onecall?lat=${x}&lon=${y}&units=metric&appid=ed5b13e0fff6479e50160511418fb26e`
            axios.get(path).then(res=>{
                console.log('промис',res.data.current.feels_like)
                resolve(res.data)
            
                                 
                                        
             
            }) 
        })
        }


    function coords (e) {

        dataFromOpenWeather(e).then((data) => {
            console.log('Text coords:', e, data)
            
            setCity(city = data.timezone)
            setTemp(temp = data.current.feels_like)
    }) }

    return(
        <YMaps>
        <div>My awesome application with maps!</div>
        <Map onClick={coords} defaultState={{ center: [48.13, 11.58], zoom: 9 }} />
        <button >Жмыхай!</button>
        <div>В {city}{temp}градусов</div>
        </YMaps>

    )
}

export default CoordsFromMap