import React, {useState} from "react";
import axios from "axios";


function Country() {
    const [countrys, setCountry] = useState(null);
    const collatore = new Intl.Collator()

    function fetchData() {
        axios.get('https://restcountries.com/v3.1/all').then(res => {
            let dict = res.data
            dict.sort((a, b) => collatore.compare(a.name.official, b.name.official))
            console.log(dict)
            setCountry(dict)
            
        })
        
    

    }

    return(
        <>
        
        <button onClick={fetchData}>Страны</button>
        <div>{countrys &&
            countrys.map((value, index) => {
                return (
                    <div className="country" key={index}>
                        <button>Код страны: {value.cca2} -- {value.name.official}</button>
                    </div>
                )})}
                </div>

        </>
    )

}


export default Country