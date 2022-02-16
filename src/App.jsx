import "./App.css";
import React, { Component } from "react";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { Route, Routes } from "react-router";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePublic />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/contacts"
            element={
              <RequireAuth>
                <Contacts />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>

        {/* <h1>Phonebook</h1>
        <Login/>
        <Register/>
        <RequireAuth>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </RequireAuth> */}
      </div>
    );
  }
}
