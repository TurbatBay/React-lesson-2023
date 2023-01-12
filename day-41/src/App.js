import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Counter from './components/Counter';
import UpdateArrays from './components/UpdateArrays';
import List from './components/SpreadArray';
import UpdatingObjects from './components/UpdatingObjects';

function App() {
  return (
    <div className="App">
      <Main/>
      <Counter/>
      <UpdateArrays/>
      <List/>
      <UpdatingObjects/>
    </div>
  );
}

export default App;
