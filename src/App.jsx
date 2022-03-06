import "./App.css";
import React, { Component } from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import PrivatePage from "./pages/PrivatePage/PrivatePage";
import {
  loadFromSessionStorage,
  saveToSessionStorage,
} from "./services/sessionStorage";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#43271e",
    },
    secondary: {
      main: "#2e7d32",
    },
  },
});

if (loadFromSessionStorage("USER") === undefined) {
  saveToSessionStorage("USER", []);
}
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <NavBar />
          <h1>Phonebook App</h1>

          <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contacts/:userId" element={<PrivatePage />} />
          </Routes>
        </ThemeProvider>
      </div>
    );
  }
}
