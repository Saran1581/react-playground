import React, { useState } from "react";
import axios from "axios";
import "./register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [dept, setdept] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerMsg, setRegisterMsg] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");

  const getRegister = () => {
    let userObj = {
      userName: name,
      userDept: dept,
      userEmail: email,
      userPassword: password,
      userGender: gender,
      userNationality: nationality,
    };
    axios
      .post("http://localhost:5000/adduser", userObj)
      .then((data) => {
        console.log(data.data);
        // setRegisterMsg(data.data);
        if (data?.data?.success == true) {
          alert(data?.data?.message);
          window.location.href = "/login";
        } else {
          alert("Network error.. try later");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="content">
      <form>
        <h1>Signup form</h1>
        <p>Stay updated on your professional world</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="username"
          className="input"
        />
        <br />
        <br />
        <input
          type="text"
          value={dept}
          onChange={(e) => setdept(e.target.value)}
          placeholder="department"
          className="input"
        />
        <br />
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email id"
          className="input"
        />
        <br />
        <br />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
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
        <br />
        <br />  <label for="css">Female</label>
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
        <button
          className="btn"
          style={{ cursor: "pointer" }}
          onClick={getRegister}
        >
          Register
        </button>
        <br />
        <br />
        <div style={{ color: "Green" }}>{registerMsg}</div>
        <a href="/login">Go to Login</a>
      </form>
    </div>
  );
};

export default Register;
