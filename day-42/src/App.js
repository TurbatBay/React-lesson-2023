import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [passwordMatch, setPasswordMatch] = useState(true);

  function handleRegister(e) {
    e.preventDefault();
    const firstname = e.target.firstname.value;
    const lastname = e.target.lastname.value;
    const password = e.target.password.value;
    const confirm = e.target.confirm.value;

    if (password !== confirm) {
      setPasswordMatch(false);
      return;
    }
    setPasswordMatch(true);

    const user = { firstname, lastname, password, confirm };
    setUsers(prevUsers => [...prevUsers, user]);
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={handleRegister}>
          <label>
            Firstname:
            <input name="firstname" />
          </label>
          <label>
            Lastname:
            <input name="lastname" />
          </label>
          <label>
            Password:
            <input name="password" type="password" />
          </label>
          <label>
            Confirm Password:
            <input name="confirm" type="password" />
          </label>
          {!passwordMatch && (
            <div style={{ color: 'red' }}>Passwords do not match</div>
          )}
          <button type="submit">Register</button>
        </form>
        <h2> User Preview</h2>
        <ul>
          {users.map(user => (
            <li key={user.firstname}>
              {user.firstname} {user.lastname}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
