import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to="/login">Sign In</Link>{" "}
      <Link to="/register">Register new account</Link>{" "}
    </div>
  );
};

export default HomePage;
