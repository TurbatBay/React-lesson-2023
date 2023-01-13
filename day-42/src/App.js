import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {


  const [users, setUsers] = useState([]);
  
  function handleRegister (e) {
    e.preventDefault()

    const user = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      password: e.target.password.value,
      confirm: e.target.confirm.value,
    }

    setUsers(...users, user)
    console.log(users)
  } 
  



  return (
    <div className="App">
      <div>
        <form onSubmit={handleRegister}>
          <label>
            Firstname:
            <input name='firstname' ></input>
          </label>
          <label>
            Lastname:
            <input name='lastname'></input>
          </label>
          <label>
            Password:
            <input name='password' ></input>
          </label>
          <label>
            Confirm Password:
            <input name='confirm' ></input>
          </label>
          <label>
            Register:
            <button
              >Button1</button>
          </label>
        </form>
        <h2> User preview</h2>


        {users.map(u => {
          return (
            <>
              <div>{u.firstname}</div>
              <div>{u.lastname}</div>
            </>
          )
        })}
      </div>
    </div>
  );
}

export default App;
