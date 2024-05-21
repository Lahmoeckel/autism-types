import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./App.css";
import aautism from "./assets/aautism.jpg";
//import "../src/Button2Page.js"

function Home() {
  const navigate = useNavigate();

  useEffect(() => { //Beggining of react js lifecycle
    //alert("Test");
  }, []);

  return (
    <div className="hometitle">

      <h5 className="h5Teste">
        Autism Types
      </h5>
      <img src={aautism} alt="" width="460" height="345"/>
      <div className="buttonsDiv">
        {/* Botão 1 com texto Type 1 */}
        <ul><button className="btn btn1" onClick={() => { navigate("/button1") }}>Type 1</button></ul>
        {/* Botão 2 com texto Type 2 */}
        <button className="btn btn2" onClick={() => { navigate("/button2") }}>Type 2</button>
        {/* Botão 3 com texto Type 3 */}
        <button className="btn btn3" onClick={() => { navigate("/button3") }}>Type 3</button>
      </div>
      
    </div>
  );
}

export default Home;
