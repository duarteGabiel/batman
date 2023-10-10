
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/indexhome';
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
import Comentarios from './pages/detalhes/datalhes';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contato' element={<Contato />}/>
        <Route path='/fotos' element={<Fotos />}/>
        <Route path='/comentarios' element={<Comentarios />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;