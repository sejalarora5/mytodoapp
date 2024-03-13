import React from 'react';
import logo from './logo.svg';
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
