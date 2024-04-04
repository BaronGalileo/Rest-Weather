import React, {useState, useEffect} from "react";

function DateTime() {
    const [date, setDate] = useState(new Date())

    useEffect(() =>{

        let timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    })

    function clik(){
        console.log(Math.round(new Date().getTime()/1000.0))
    }
    return (
        <div>
            <p> Время : {date.toLocaleTimeString()}</p>
            <button onClick={clik}>ТестВремя</button>
        </div>
    )
}

export default DateTime