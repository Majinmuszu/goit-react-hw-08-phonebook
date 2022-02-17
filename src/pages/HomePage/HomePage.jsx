import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  const currentUser = useSelector((state) => state.loggedUser);
  console.log(currentUser);
  return (
    <div>
      <p>
        <Link to="/login">Sign In</Link>{" "}
      </p>
      <p>
        <Link to="/register">Register new account</Link>{" "}
      </p>
    </div>
  );
};

export default HomePage;
