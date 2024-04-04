import React from "react";


function InformationTable(props) {
    
    console.log(props.infoForecast.daily)
    return(

    props.infoForecast.daily.map((value, index) => {
        let time = new Date(value.dt*1000)
        return (
            
            <div className="weather" key={index}>
                <div>
                    <h2>Погода на {time.getDate(value.dt)} число</h2>
                    <p>Температура воздуха <b>{value.temp.day}°С</b> </p>
                    <p> Скорость ветра <b>{value.wind_speed}</b></p>
                </div>

                {/* В ${city.data[0].name} сегодня: ${weather.data.current.temp}°С,
                    скорость ветра:${weather.data.current.wind_speed} метр/сек, 
                    влажность: ${weather.data.current.humidity} %`; */}
            </div>
        )})

        )
    }

export default InformationTable