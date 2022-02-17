import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  const currentUser = useSelector(state => state.loggedUser)
  console.log(currentUser)
  return (
    <div>
      <Link to="/login">Sign In</Link>{" "}
      <Link to="/register">Register new account</Link>{" "}
    </div>
  );
};

export default HomePage;
