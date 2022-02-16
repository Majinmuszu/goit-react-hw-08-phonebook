import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../../services/api";

const Login = () => {
  const { data } = useGetUsersQuery();
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    console.log(data);
    const loggedUserId = data.find((user) => user.username === username && user.password === password).id;
    console.log(loggedUserId)
    navigate("/contacts/"+loggedUserId)
    // TODO dispatch obiektu usera do store
  };

  return (
    <div>
      <h1>Login</h1>
      <p>You can also use this <br/> login: zbyszek pass: stonoga <br/>
          just to check if login and contact management works fine
      </p>
      <form onSubmit={login}>
        <label>
          username: <input name="username" type="text" placeholder="username" defaultValue={"juzek"}/>
        </label>
        <label>
          password: <input name="password" type="text" placeholder="password" defaultValue={"stalowy"}/>
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
