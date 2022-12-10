import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Router declaration

// pages
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import Forgot from "./components/forgotpasswod";
import EditUser from "./components/edituser";
import Mainpage from "./components/mainpage";
import Dashboard from "./components/dashboard";
import Placed from "./components/placed";
import NonPlaced from "./components/nonPlaced";
import Company from "./components/company";

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
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/mainpage/dashboard" element={<Dashboard/>} />
        <Route path="/mainpage/placed" element={<Placed />} />
        <Route path="/mainpage/nonplaced" element={<NonPlaced />} />
        <Route path="/mainpage/company" element={<Company />} />
      </Routes>
    </Router>
  );
};

export default App;
