import React from "react";
import "./mainpage.css";

const App = () => {
  //   const getReg = () => {
  //     if ( == True) {
  //       window.location.href = "/register";
  //     }
  //   };
  return (
    <div>
      <header className="Mainpg">
        <ul>
          <a href="/mainpage/dashboard">Dashboard</a>
          <a href="/home">All Users</a>
          <a href="/mainpage/Placed">Placed Students</a>
          <a href="/mainpage/NonPlaced">Objectives</a>
          <a href="/mainpage/company">Company List</a>
        </ul>
      </header>
      <div className="firstui">
        <h1>.</h1>
      </div>
      <div className="secondUI">
      <h1 style={{ color: "green" }}>SRI SHAKTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY, L&T BYPASS, COIMBATORE</h1>
        <h1 className="top">POWER THE YOUNG GENERATION</h1>
        

      </div>
      
    </div>
  );
};

export default App;
