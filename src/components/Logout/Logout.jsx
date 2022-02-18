import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLoggedIn } from "../../redux/actions";
import { removeFromSessionStorage } from "../../services/sessionStorage";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    dispatch(userLoggedIn(false));
    removeFromSessionStorage("USER")
    navigate("/");
  };
  return (
    <div>
      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
