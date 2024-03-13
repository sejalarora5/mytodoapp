import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CardContainer from './components/CardContainer/CardContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CardContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
