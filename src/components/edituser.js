import axios from "axios";
import React, { useState, useEffect } from "react";

const EditUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dept, setDept] = useState("");
  const [gender, setGender] = useState("");
  const [userId, setUserId] = useState("");
  const [nationality, setNationality] = useState("");

  useEffect(() => {
    setUserId(window.location.pathname.split("/")[2]);
  }, []);

  const updateUser = () => {
    let userObj = {
      userid: userId,
      name: username,
      email: email,
      Dept: dept,
      Gender: gender,
      Nationality: nationality,
    };
    axios.post("http://localhost:5000/edituser", userObj).then((data) => {
      console.log(data?.data);
      if (data?.data?.success == true) {
        alert(data?.data?.message);
        setUserId("");
        setUsername("");
        setEmail("");
        setDept("");
        setGender("");
        setNationality("");
        window.location.href = "/home";
      } else {
        alert(data?.data?.message);
      }
    });
  };

  return (
    <div className="content">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="enter your name"
        className="input"
      />
      <br />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="enter your email"
        className="input"
      />
      <br /> <br />
      <input
        type="text"
        value={dept}
        onChange={(e) => setDept(e.target.value)}
        placeholder="enter your dept"
        className="input"
      />
      <br />
      <br />
      <input
        type="text"
        value={nationality}
        onChange={(e) => setNationality(e.target.value)}
        placeholder="nationlaity"
        className="input"
      />
      <br />
      <br />
      <p>Gender</p>
      <input
        type="radio"
        id="html"
        name="gender"
        value="male"
        onChange={(e) => setGender(e.target.value)}
      />{" "}
        <label for="html">Male</label>
      <br /> {" "}
      <input
        type="radio"
        id="css"
        name="gender"
        value="female"
        onChange={(e) => setGender(e.target.value)}
      />
        <label for="css">Female</label>
      <br />
      <br />
      <button
        style={{ cursor: "pointer" }}
        onClick={updateUser}
        className="btn"
      >
        Edit
      </button>
    </div>
  );
};

export default EditUser;
