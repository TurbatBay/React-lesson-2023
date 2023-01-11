import './App.css';
import MainMenu from './components/MainMenu'
import Help from './components/Help';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='help'>
          <Help />
         
        </div>
        <div className='navbar'>
          <h1>NAVBAR</h1>
          <Navbar />
        </div>
        <div className='main-menu'>
          {/* <MainMenu /> */}
          <h1>MAIN MENU</h1>
    
        </div>
      </div>
    </div>
  );
}

export default App;
