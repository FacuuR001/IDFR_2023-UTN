import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Inicio from './pages/Inicio';
import CrearEncuesta from "./components/CrearEncuesta";
import Encuesta from "./components/Encuesta";
import Menu from "./components/Menu";
import RespuestaEnviada from "./pages/RespuestaEnviada";
import encuestas from "./data/encuestas.json"
import './App.css';
import './assets/css/base/_reset.css'


function App() {
  const [listaEncuestas, setListaEncuestas] = useState(encuestas);
  
  const agregarEncuesta = (nuevaEncuesta) => {
    nuevaEncuesta.id = listaEncuestas.length + 1
    nuevaEncuesta.preguntas = [];
    setListaEncuestas([...listaEncuestas, nuevaEncuesta]);
  };

  const agregarPregunta = (encuestaId, nuevaPregunta) => {
    setListaEncuestas((prevEncuestas) => {
      return prevEncuestas.map((encuesta) => {
        if (encuesta.id === encuestaId) {
          return {
            ...encuesta,
            preguntas: [...encuesta.preguntas, nuevaPregunta],
          };
        }
        return encuesta;
      });
    });
  };

  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Inicio listaEncuestas={listaEncuestas}/>} />

          <Route path="/encuesta/crear" element={
            <CrearEncuesta 
              agregarEncuesta={agregarEncuesta} 
              agregarPregunta={agregarPregunta}
              />
            } 
          />

          <Route path="/encuesta/:id" element={ 
            <Encuesta 
              listaEncuestas={listaEncuestas} 
              />
            } 
          />

          <Route path="/respuesta-enviada" element={<RespuestaEnviada/>}/>

          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
