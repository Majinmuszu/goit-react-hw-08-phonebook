import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logout from "../Logout/Logout";

const NavBar = () => {
  const currentUser = useSelector((state) => state.loggedUser);

  const navLinks =
    currentUser === false ? (
      <>
        <NavLink to="/">Home Page </NavLink>
        <NavLink to="/login">Sign In </NavLink>
        <NavLink to="/register">Sign Up</NavLink>
      </>
    ) : (
      <>
        <Logout />
      </>
    );

  return (
    <div>
      {navLinks}
    </div>
  );
};

export default NavBar;
