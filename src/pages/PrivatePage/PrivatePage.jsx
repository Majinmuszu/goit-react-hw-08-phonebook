import React from "react";
import { ContactForm } from "./../../components/ContactForm/ContactForm";
import { Filter } from "./../../components/Filter/Filter";
import { ContactList } from "./../../components/ContactList/ContactList";
import Logout from "../../components/Logout/Logout";
// import { useGetUserByIdQuery } from "../../services/api";
// import { useParams } from "react-router";
import { useSelector } from "react-redux";

const PrivatePage = () => {
  const loggedUser = useSelector(state => state.loggedUser)
  console.log(loggedUser.id);
  return (
    <div>
        <>
           <Logout />
      <ContactForm />
      <h2><img width="50px" height="50px" alt={loggedUser.name} src={loggedUser.avatar}/>{loggedUser.name}'s Contacts</h2>
      <Filter />
      <ContactList />
        </>
    </div>
  );
};

export default PrivatePage;
