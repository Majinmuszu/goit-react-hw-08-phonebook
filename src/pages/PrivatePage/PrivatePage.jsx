import React from "react";
import { ContactForm } from "./../../components/ContactForm/ContactForm";
import { Filter } from "./../../components/Filter/Filter";
import { ContactList } from "./../../components/ContactList/ContactList";
import Logout from "../../components/Logout/Logout";
import { useGetUserByIdQuery } from "../../services/api";
import { useParams } from "react-router";

const PrivatePage = () => {
  const { userId } = useParams();  //TODO wrzucić usera do store zamiast pobierania z url params
  const { data, error, isLoading } = useGetUserByIdQuery(userId);
  console.log(data);
  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <p>loadingkurwa</p>
      ) : data ? (
        <>
           <Logout />
      <ContactForm />
      <h2><img width="50px" height="50px" alt={data.name} src={data.avatar}/>{data.name}'s Contacts</h2>
      <Filter />
      <ContactList />
        </>
      ) : null}
     
    </div>
  );
};

export default PrivatePage;
