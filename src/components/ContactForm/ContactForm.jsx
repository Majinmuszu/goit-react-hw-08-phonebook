import React from "react";
import { useSelector } from "react-redux";
import { usePostContactMutation } from "../../services/api";

export const ContactForm = () => {
  const [submitForm, mutationdata] = usePostContactMutation();
  const currentUserId = useSelector((state) => state.loggedUser.id);
  return (
    <form
      onSubmit={(e) => {
        const form = e.target;
        const name = form.name.value;
        const phone = form.number.value;
        e.preventDefault();
        form.reset();
        console.log(mutationdata);
        console.log(currentUserId);
        submitForm([currentUserId, { name, phone }]);
      }}
    >
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Contact Name"
          required
        />
      </label>
      <label>
        {" "}
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Phone Number"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
