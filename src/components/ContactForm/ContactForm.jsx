import { Button, TextField } from "@mui/material";
import { Loading } from "notiflix";
import React from "react";
import { useSelector } from "react-redux";
import { usePostContactMutation } from "../../services/api";
import { loadFromSessionStorage } from "../../services/sessionStorage";
import s from "./ContactForm.module.css";

export const ContactForm = () => {
  const [submitForm] = usePostContactMutation();
  const currentUserId =
    useSelector((state) => state.loggedUser.id) ||
    loadFromSessionStorage("USER")[0];
  return (
    <>
      <h3>Add New Contact</h3>
      <form
        className={s.form}
        onSubmit={(e) => {
          const form = e.target;
          const name = form.name.value;
          const phone = form.number.value;
          e.preventDefault();
          form.reset();
          submitForm([currentUserId, { name, phone }]);
          Loading.hourglass("Adding contact...");
        }}
      >
        <TextField
          inputProps={{
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
            title:
              "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
          }}
          variant="filled"
          label="Name"
          size="small"
          margin="dense"
          type="text"
          name="name"
          placeholder="Contact Name"
          required
          sx={{
            borderBottom: "2px solid",
          }}
        />

        <TextField
          inputProps={{
            pattern:
              "+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",
            title:
              "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",
          }}
          variant="filled"
          label="Number"
          size="small"
          margin="dense"
          type="tel"
          name="number"
          placeholder="Phone Number"
          required
          sx={{
            marginBottom: "20px",
            borderBottom: "2px solid",
          }}
        />
        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </form>
    </>
  );
};
