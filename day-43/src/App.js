import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from "./component/Form"
import Login from './component/Login';
import About from './component/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './component/Register';
import Home from './component/Home';
import Usukhuu from './component/about/usukhuu';
import Khangai from './component/about/khangai';
import NotFound from './component/NotFound';

function App() {

  return (
    <div className="App">
      <h1>Day 43-React router</h1>
      <div className='navbar'>
        <a href='./about'>About</a>
        <a href='./login'>login</a>
        <a href='./register'>register</a>
        <a href='./form'>Form</a>
        <a href='./'>home</a>
      </div>
      <Routes>
        <Route path='/about/*' element={<About />}>
          <Route path='usukhuu' element={<Usukhuu />}/>
          <Route path='khangai' element={<Khangai />}/>
        </Route>


        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/form' element={<Form />}/>
        <Route path='/' element={<Home />}/>
        <Route path='*' element={<NotFound />}/>
        
      </Routes>
    </div>
  );
}

export default App;






