import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return <div>
          <NavLink to="/">Home Page</NavLink> {" "}
          <NavLink to="/login">Sign In</NavLink> {" "}
          <NavLink to="/register">Sign Up</NavLink> {" "}
          <NavLink to="/contacts">Contacts</NavLink>
        </div>;
};

export default NavBar;
