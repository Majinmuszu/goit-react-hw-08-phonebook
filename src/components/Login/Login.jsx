import { Loading } from "notiflix";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { userLoggedIn } from "../../redux/actions";
import { useGetUsersQuery } from "../../services/api";

const Login = () => {
  Loading.remove(1000)
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
    const loggedUser = data.find( (user) => user.username === username && user.password === password);
    // console.log(loggedUser);
    dispatch(userLoggedIn(loggedUser));
    navigate(`/contacts/${loggedUser.id}`);
    // console.log(currentUser);
  };

  return (
    <div>
      <h1>Login</h1>
      <p>
        You can also use this: <br /> login: zbyszek <br/> pass: stonoga <br />
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
