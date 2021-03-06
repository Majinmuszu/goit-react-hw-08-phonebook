import React, { useEffect } from "react";
import { ContactForm } from "./../../components/ContactForm/ContactForm";
import { Filter } from "./../../components/Filter/Filter";
import { ContactList } from "./../../components/ContactList/ContactList";
import { useSelector } from "react-redux";
import { Loading } from "notiflix";
import {
  loadFromSessionStorage,
  saveToSessionStorage,
} from "../../services/sessionStorage";
import { useLocation, useNavigate } from "react-router";

const PrivatePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  Loading.remove(100);
  const loggedUserId = loadFromSessionStorage("USER")[0];
  const loggedUserName =
    useSelector((state) => state.loggedUser.name) ||
    loadFromSessionStorage("USER")[1];
  useEffect(() => {
    if (location.pathname !== `/contacts/${loggedUserId}`) {
      navigate("/");
      saveToSessionStorage("USER", []);
    }
  }, [location.pathname, loggedUserId, navigate]);

  return (
    <div>
      <>
        <ContactForm />
        <Filter />
        <h2>{loggedUserName}'s Contacts</h2>
        <ContactList />
      </>
    </div>
  );
};

export default PrivatePage;
