/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect  } from 'react';
import './Nasa.css';

const Nasa = () => {
    const today = new Date(Date.now()).toISOString().slice(0, 10);
    const [date, setDate] = useState('') 
    const [picture, setPicture] = useState([])
    console.log('TODAY/HOY: ', today)
   // Almacenamos en una constante la URL de la NASA
   const NASA_URL = "https://api.nasa.gov/"; 
   // Almacenamos en una constante nuestra API Key, esto es recomendable almacenarlo en una variable de entorno
const NASA_API_KEY = "RPyGw6qL0fxDc9XvseESBQGobecqmD1n53sHZH0m";

useEffect(()=> {
    const getNasaPicture = async () => {
        const picture = await fetch(`${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`)
        const pictureJson = await picture.json();
        console.log(pictureJson)
        return{
            ...pictureJson,
            date: pictureJson.date,
            explanation:pictureJson.explanation,
            title:pictureJson.title,
            hdurl:pictureJson.url,
            copyright:pictureJson.copyright
        }
    }      
    getNasaPicture().then((picture)=> setPicture([picture]))
    },[date]);

    // Función para manejar cambios en el input de fecha
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const currentDate = today; // Obtén la fecha actual
    if (selectedDate <= currentDate) {
      setDate(selectedDate); // Actualiza la fecha solo si es válida
    }
  };
    return (
        <div className='divNasa'>
         <h1>APOD</h1>
         <h2> Imágen Astrnómica del día</h2>
         <h3>Esta imágen corresponde con la fecha:  {today}</h3>
         <input type="date" 
            value={date}
            // eslint-disable-next-line react/no-unknown-property
            onChange = {handleDateChange}
            max={today}
            />   
            {               
            picture.map((p)=>(
                <div key={p.date}>
                    <img src={p.hdurl} alt={p.title} />
                    <p>{p.copyright}</p>
                    <h2>{p.title}</h2>
                    <p>{p.explanation}</p>
                </div>
            ) 
            )
        }   
    </div>
    )
    // eslint-disable-next-line no-unreachable
}

export  default Nasa

/**API_KEY=  RPyGw6qL0fxDc9XvseESBQGobecqmD1n53sHZH0m */