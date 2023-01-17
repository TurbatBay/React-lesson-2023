import logo from './logo.svg';
import './App.css';
import Example from './component/Accordian';
import { Route , Routes } from 'react-router-dom';
import Accordian from './component/Accordian';
import Panel from './component/Panel';
import Index from './component/Index';
import AboutPage from './component/AboutPage';
import HomePage from './component/HomePage';
import Movies from './component/Movies';
import Movie from './component/Movie';

function App() {
  return (
    <div className="App">

      <Routes>
        
        <Route path='/' element={<Index />} />
        <Route path='/accordian' element={<Accordian />} />
        <Route path='/panel' element={<Panel />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/movies' element={<Movies />} />
        <Route path={'/movie/:id'} element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
