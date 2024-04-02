import React, { useState } from "react";
import axios from "axios";


function Button(props) {
  let [temp, setTemp] = useState();
  let [city, setCity] = useState();


  function dataFromOpenWeather() {
    return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const path = `https://api.openweathermap.org/data/3.0/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=ed5b13e0fff6479e50160511418fb26e`
      axios.get(path).then(res=>{
        console.log('промис',res.data.current.feels_like)
        resolve(res.data)
        
                             
                                    
         
        }) 
    })
    }
  )
}

  

 

    function coords()  {
      dataFromOpenWeather().then((data) => {
        setCity(city = data.timezone)
        setTemp(temp = data.current.feels_like)

      })
     }


      
            

            
            


   
    return(
        <>
        <button onClick={coords}>{props.name}</button>
        <div>В {city}{temp}градусов</div>
        </>
    )
}

export default Button