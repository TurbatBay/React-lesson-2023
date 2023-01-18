import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Login() {
  const [user, setUser] = useState({
    loginName: "khangailhuu@gmail.com",
    password: "12355666",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value);
    if (
      user.loginName === e.target.username.value &&
      user.password === e.target.password.value
    ) {
      toast("User is permitted");
    } else {
      toast("User is not permitted");
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Login Name:</label>
        <input name="username" type="email" /> <br />
        <label htmlFor="password">Password: </label>
        <input name="password" type="password" /> <br />
        <button>Sign in</button>
      </form>
      <ToastContainer />
    </div>
  );
}
