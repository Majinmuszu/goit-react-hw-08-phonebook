import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../services/api";

const Register = () => {
  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();
  // const { data } = useGetUsersQuery();

  // const checkIfUsernameIsTaken = () => {
  // TODO storzyć funkcję sprawdzającą czy username jest zajęty.
  // };

  const onRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const username = form.username.value;
    const password = form.password.value;
    registerUser({ name, username, password });
    navigate("/login");
    //TODO ogarnąć możliwość przekierowywania tylko na success, w razie błedu komunikat
    form.reset();
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onRegister}>
        <label>
          Full Name:{" "}
          <input name="name" type="text" placeholder="Full Name" required />
        </label>
        <label>
          username:{" "}
          <input name="username" type="text" placeholder="username" required />
        </label>
        <label>
          password:{" "}
          <input name="password" type="text" placeholder="password" required />
        </label>
        <input type="submit" value="Create new user" />
      </form>
      <p>
        Already have account? <Link to="/login">Sign In</Link>{" "}
      </p>
    </div>
  );
};

export default Register;
