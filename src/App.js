import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Button1Page from './Button1Page.js';
import Button2Page from './Button2Page.js';
import Button3Page from './Button3Page.js';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<Home />} />
        {/* Rota para a página do botão 1 */}
        <Route path="/button1" element={<Button1Page />} />
        {/* Rota para a página do botão 2 */}
        <Route path="/button2" element={<Button2Page />} />
        {/* Rota para a página do botão 3 */}
        <Route path="/button3" element={<Button3Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

