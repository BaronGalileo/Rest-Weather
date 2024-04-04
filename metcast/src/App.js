import React from "react";
import CordsFromMap from "./Components/Coords";
import Form from "./Components/Form";
import Test from "./Components/test";
import axios from "axios";
import Country from "./Components/Country";








function App() {


    function getCity(path) {
        return axios.get(path)
      }
     
    function getWeather(path) {
        return axios.get(path)
      }


    return(
        <>
        <h1>Hello</h1>
        <Country/>
        <CordsFromMap/>
        <Form myGetCity={getCity}/>
        <Test name='Погода сегодня у меня дома!'/>
        </>
    )
}


export default App
