import React from "react";
import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import {
  useDeleteContactByIdMutation,
  useGetContactsQuery,
} from "../../services/api";
import Loader from "../Loader/Loader";

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();

  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.phone.includes(filter)
  );
};
export const Contact = () => {
  const currentUserId = useSelector(state => state.loggedUser.id)
  console.log(currentUserId)
  const { data, error, isLoading } = useGetContactsQuery(currentUserId);
  // console.log(data, error, isLoading);

  const [deleteContact] = useDeleteContactByIdMutation();
  const filter = useSelector((state) => state.filter);
  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Loader />
      ) : data ? (
        <>
          {getVisibleContacts(data, filter).map(({ id, name, phone }) => (
            <li key={id}>
              {name} : {phone}
              <button type="button" onClick={() => deleteContact([currentUserId, id])}>
                Delete
              </button>
            </li>
          ))}
        </>
      ) : null}
    </>
  );
};
