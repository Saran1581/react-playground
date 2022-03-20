import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Router declaration

// pages
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import Forgot from "./components/forgotpasswod";
import EditUser from "./components/edituser";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resetpassword" element={<Forgot />} />
        <Route path="/edituser/:id" element={<EditUser />} />
      </Routes>
    </Router>
  );
};

export default App;
