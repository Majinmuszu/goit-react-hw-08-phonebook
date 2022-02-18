import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { loadFromSessionStorage, saveToSessionStorage } from "../../services/sessionStorage";
import Logout from "../Logout/Logout";

const NavBar = () => {
  saveToSessionStorage("USER", []);
  const currentUser = useSelector((state) => state.loggedUser);
  const currentUserId = currentUser.id || loadFromSessionStorage("USER")[0];
  const location = useLocation();
  // console.log(location);
  // console.log(currentUserId);

  const navLinks =
    currentUser === false &&
    location.pathname !== `/contacts/${currentUserId}` ? (
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

  return <div>{navLinks}</div>;
};

export default NavBar;
