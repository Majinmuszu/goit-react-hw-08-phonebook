import { List } from "@mui/material";
import React from "react";
import { Contact } from "../Contact/Contact";

export const ContactList = () => {
  return (
    <div>
      <List sx={{
        maxWidth: "400px",
        margin: '0 auto'
      }}>
        <Contact />
      </List>
    </div>
  );
};
