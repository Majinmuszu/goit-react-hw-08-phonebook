import { Loading } from "notiflix";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLoggedIn } from "../../redux/actions";
import { saveToSessionStorage } from "../../services/sessionStorage";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    dispatch(userLoggedIn(false));
    saveToSessionStorage("USER", []);
    Loading.hourglass("Logout in process...");
      setTimeout(() => {
        navigate(`/`);
      }, 1000);
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
