import "./App.css";
import React, { Component } from "react";
// import { ContactForm } from "./components/ContactForm/ContactForm";
// import { ContactList } from "./components/ContactList/ContactList";
// import { Filter } from "./components/Filter/Filter";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import PrivatePage from "./pages/PrivatePage/PrivatePage";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>Phonebook</h1>
        <Routes>
          <Route path="/*" element={<HomePage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path='/contacts/:userId' element={<PrivatePage/>}/>
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
