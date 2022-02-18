import { Loading, Report } from "notiflix";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetUsersQuery, useRegisterUserMutation } from "../../services/api";

const Register = () => {
  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();
  const { data } = useGetUsersQuery();

  const checkIfUsernameIsTaken = (name, username, password) => {
    if (data.find((user) => user.username === username)) {
      Report.failure(
        "Username is taken",
        "Please choose other username",
        "Okay"
      );
    } else {
      // console.log("username available");
      registerUser({ name, username, password });
      Loading.hourglass("Registering New User...");
      setTimeout(() => navigate("/login"), 2000);
    }
  };

  const onRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const username = form.username.value;
    const password = form.password.value;
    checkIfUsernameIsTaken(name, username, password);
    form.reset();
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onRegister}>
        <label>
          Full Name:{" "}
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </label>
        <label>
          username:{" "}
          <input
            name="username"
            type="text"
            placeholder="username"
            required
            pattern="^[a-z0-9_-]{3,25}$"
          />
        </label>
        <label>
          password:{" "}
          <input
            name="password"
            type="text"
            placeholder="password"
            required
            pattern="^[a-zA-Z]\w{5,25}$"
          />
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
