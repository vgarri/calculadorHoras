import React from "react";
import { useState, useEffect } from "react";

const Main = () => {
 const [cuenta, setCuenta] = useState("");
 const [message, setMessage] = useState("");
 const [resultado, setResultado] = useState("");

 const handleCuenta = (e) => setCuenta(e.target.value);



  





  const handleClick = () => {
    if (cuenta == 40){
      setResultado(5123123)

    } else {
      setResultado( (40 - cuenta ) )
    }
   


  }








  return <main>
  <input className="input" type="text" placeholder="Cuántas horas has hecho esta semana?"onChange={handleCuenta}></input>
  <section className="botonera">
    <button onClick={handleClick}>✨Calcular✨</button>
  </section>
  
  {resultado !=""? <section className="mensaje">
    
    {resultado > 0 && resultado !=5123123 ? <h1> Te faltan {resultado} horas :( ánimo!!!</h1> : ""}
    {resultado < 0 ? <h1> Te sobran {Math.abs(resultado)} horas 😡 deberías descansar!!!</h1>:""}
    {resultado == 5123123 ? <h1> Ya hiciste 40 horas esta semana SIIIIIII 🥳</h1> : "" }
  
  </section> :""}
  
  
  
  
  
  </main>;
};

export default Main;
