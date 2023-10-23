import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Inicio from './pages/Inicio';
import CrearEncuesta from "./components/CrearEncuesta";
import Encuesta from "./components/Encuesta";
import Menu from "./components/Menu";
import encuestas from "./data/encuestas.json"
import './App.css';
import './assets/css/base/_reset.css'


function App() {
  const [listaEncuestas, setListaEncuestas] = useState(encuestas);

  const agregarEncuesta = (nuevaEncuesta) => {
    nuevaEncuesta.id = listaEncuestas.length + 1
    setListaEncuestas([...listaEncuestas, nuevaEncuesta]);
  };
    
  const responderEncuesta = (id, respuestas) => {
    const encuesta = listaEncuestas.find(enc => enc.id === parseInt(id));
    encuesta.respuestas = [respuestas];
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
              />
            } 
          />

          <Route path="/encuesta/:id" element={ 
            <Encuesta 
              listaEncuestas={listaEncuestas} 
              responderEncuesta={responderEncuesta} 
              />
            } 
          />

          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
