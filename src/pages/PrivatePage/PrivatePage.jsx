import React from "react";
import { ContactForm } from "./../../components/ContactForm/ContactForm";
import { Filter } from "./../../components/Filter/Filter";
import { ContactList } from "./../../components/ContactList/ContactList";
// import Logout from "../../components/Logout/Logout";
// import { useGetUserByIdQuery } from "../../services/api";
// import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Loading } from "notiflix";

const PrivatePage = () => {
  Loading.remove(100);
  const loggedUser = useSelector((state) => state.loggedUser);
  console.log(loggedUser.id);
  return (
    <div>
      <>
        <ContactForm />
        <h2>{loggedUser.name}'s Contacts</h2>
        <Filter />
        <ContactList />
      </>
    </div>
  );
};

export default PrivatePage;
