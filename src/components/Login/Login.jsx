import { Loading, Report } from "notiflix";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { userLoggedIn } from "../../redux/actions";
import { useGetUsersQuery } from "../../services/api";

const Login = () => {
  Loading.remove(300);
  // const currentUser = useSelector((state) => state.loggedUser);
  const { data } = useGetUsersQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    // console.log(data);
    const loggedUser = data.find(
      (user) => user.username === username && user.password === password
    );
    console.log(loggedUser);
    if (loggedUser === false) {
      Report.failure(
        "Invalid user",
        "Please type in correct username and password <br/> Or Register new user",
        "Okay"
      );
    } else {
      dispatch(userLoggedIn(loggedUser));
      Loading.hourglass('Logging...')
      setTimeout(() => {navigate(`/contacts/${loggedUser.id}`)}, 1000)
    }
    // console.log(currentUser);
  };

  return (
    <div>
      <h1>Login</h1>
      <p>
        You can also use this: <br /> login: zbyszek <br /> pass: stonoga <br />
      </p>
      <form onSubmit={login}>
        <label>
          username:{" "}
          <input
            name="username"
            type="text"
            placeholder="username"
            defaultValue={"juzek"}
          />
        </label>
        <label>
          password:{" "}
          <input
            name="password"
            type="text"
            placeholder="password"
            defaultValue={"stalowy"}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <p>
        Do not have account? <Link to="/register">Sign Up</Link>{" "}
      </p>
    </div>
  );
};

export default Login;
