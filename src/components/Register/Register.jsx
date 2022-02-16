import React from "react";

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
      <form >
        <input type="submit" value="Create new user" />
      </form>
    </div>
  );
};

export default Register;