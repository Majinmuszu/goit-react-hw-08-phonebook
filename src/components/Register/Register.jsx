import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  //   const [data] = useRegisterUserMutation();

  //   const sendData = (e) => {
  //     e.preventDefault();

  //     const body = {
  //       name: "New User",
  //     };
  //     data(body);
  //   };

  return (
    <div>
      <h1>Register</h1>
      <form>
        <label>
          Full Name:{" "}
          <input name="password" type="text" placeholder="Full Name" />
        </label>
        <label>
          username: <input name="password" type="text" placeholder="username" />
        </label>
        <label>
          password: <input name="password" type="text" placeholder="password" />
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
