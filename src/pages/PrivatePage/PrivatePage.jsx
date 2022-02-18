import React from "react";
import { ContactForm } from "./../../components/ContactForm/ContactForm";
import { Filter } from "./../../components/Filter/Filter";
import { ContactList } from "./../../components/ContactList/ContactList";
// import Logout from "../../components/Logout/Logout";
// import { useGetUserByIdQuery } from "../../services/api";
// import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Loading } from "notiflix";
import { loadFromSessionStorage } from "../../services/sessionStorage";
import { useGetUserByIdQuery } from "../../services/api";

const PrivatePage = () => {
  Loading.remove(100);
  const loggedUserName = useSelector((state) => state.loggedUser.name)  || loadFromSessionStorage("USER")[1];
  console.log(loggedUserName);
  console.log(loadFromSessionStorage("USER")[1])
  return (
    <div>
      <>
        <ContactForm />
        <h2>{loggedUserName}'s Contacts</h2>
        <Filter />
        <ContactList />
      </>
    </div>
  );
};

export default PrivatePage;
