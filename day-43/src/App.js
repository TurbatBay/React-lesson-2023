import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from "./component/Form"
import Login from './component/Login';
import About from './component/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './component/Register';

function App() {

  return (
    <div className="App">
      <h1>Day 43-React router</h1>
      <Routes>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;






