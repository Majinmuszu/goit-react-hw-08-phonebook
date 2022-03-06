import { Button, TextField } from "@mui/material";
import { Loading, Report } from "notiflix";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { userLoggedIn } from "../../redux/actions";
import { useGetUsersQuery } from "../../services/api";
import { saveToSessionStorage } from "../../services/sessionStorage";
import s from "./Login.module.css";

const Login = () => {
  Loading.remove(300);

  const { data } = useGetUsersQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    const loggedUser = data.find(
      (user) => user.username === username && user.password === password
    );
    // console.log(data);
    // console.log(loggedUser);
    if (loggedUser === undefined) {
      Report.failure(
        "Invalid user",
        "Please type in correct username and password <br/> Or Register new user",
        "Okay"
      );
    } else {
      dispatch(userLoggedIn(loggedUser));
      saveToSessionStorage("USER", [loggedUser.id, loggedUser.name]);
      Loading.hourglass("Login in process...");
      setTimeout(() => {
        navigate(`/contacts/${loggedUser.id}`);
      }, 1000);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form className={s.form} onSubmit={login}>
        <TextField
          inputProps={{
            pattern: "^[a-z0-9_-]{3,25}$",
          }}
          label="Username"
          size="small"
          margin="normal"
          name="username"
          type="text"
          placeholder="username"
          defaultValue={"juzek"}
          required
        />

        <TextField
          inputProps={{
            pattern: "^[a-z0-9_-]{5,25}$",
          }}
          label="Password"
          size="small"
          margin="normal"
          name="password"
          type="text"
          placeholder="password"
          defaultValue={"stalowy"}
          required
        />

        <Button variant="outlined" type="submit">
          Login
        </Button>
      </form>
      <p>
        Do not have account? <Link to="/register">Sign Up</Link>{" "}
      </p>
    </div>
  );
};

export default Login;
