import React, { useState } from "react";
import axios from "axios";
import "./bootstrap.css";
import { useEffect } from "react/cjs/react.production.min";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginMsg, setLoginMsg] = useState("");
  // const [loginAccess, setLoginAccess] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");

  const clearAll = () => {
    // values
    setLoginEmail("");
    setLoginPassword("");
    setEmailError(false);
    setPasswordError(false);

    //messages
    setLoginMsg("");
    setEmailErrorMsg("");
    setPasswordErrorMsg("");
  };

  const getLogin = (e) => {
    e.preventDefault();
    // Validations
    if (loginEmail == "") {
      setEmailError(true);
      setEmailErrorMsg("Please Enter Your mail Id");
    }
    if (loginPassword == "") {
      setPasswordError(true);
      setPasswordErrorMsg("Please Enter your password");
    } else if (!emailError && !passwordError) {
      let loginObj = {
        userEmail: loginEmail,
        userPassword: loginPassword,
      };
      axios
        .post("http://localhost:5000/userlogin", loginObj)
        .then((data) => {
          console.log(data?.data);
          if (data?.data?.access == true) {
            window.location.href = "/home";
          } else {
            alert(data?.data?.message);
            clearAll();
          }
        })
        .catch((err) => {
          console.log(err);
          clearAll();
        });
    }
  };

  return (
    <div className="page">
      <div className="header">
        <h2 style={{ color: "blue" }}>EMPLOYEE MANAGEMENT SYSTEM</h2>
        <img src="https://cdn.vectorstock.com/i/1000x1000/49/94/businessman-group-employee-abstract-logo-vector-5454994.webp"></img>
        <div className="text-white ">
          New USER?{" "}
          <a
            href="/register"
            color="green
            "
          >
            Join now
          </a>
        </div>
      </div>
      <br />

      <br />
      <br />
      <p className="text" style={{ color: "blue" }}>
        LOGIN
      </p>
      <br />
      <br />
      <div className="indent">
        <form className="form">
          <input
            type="text"
            value={loginEmail}
            onChange={(e) => {
              if (e.target.value !== "") {
                setEmailError(false);
              } else if (e.target.value == "") {
                setEmailError(true);
                setEmailErrorMsg("Please Enter Your mail Id");
              }
              setLoginEmail(e.target.value);
            }}
            placeholder="Email or Phone"
            className="input"
            style={{ border: emailError ? "2.0px solid red" : "none" }}
          />
          <br />
          {emailError && <span style={{ color: "red" }}>{emailErrorMsg}</span>}
          <br />
          <br />
          <input
            type="text"
            placeholder="Password"
            className="input"
            value={loginPassword}
            onChange={(e) => {
              if (e.target.value !== "") {
                setPasswordError(false);
              } else if (e.target.value == "") {
                setPasswordError(true);
                setPasswordErrorMsg("Please Enter Your Password");
              }
              setLoginPassword(e.target.value);
            }}
            style={{ border: passwordError ? "2.0px solid red" : "none" }}
          />
          <br />
          {passwordError && (
            <span style={{ color: "red" }}>{passwordErrorMsg}</span>
          )}
          <br />
          <br />
          <br />
          <button
            style={{ cursor: "pointer" }}
            className="btn btn-outline-light text-blue"
            onClick={(e) => getLogin(e)}
          >
            LOGIN
          </button>
          {loginMsg}
          <br />
          <br />
          <br />

          <a
            href="/resetpassword"
            style={{
              textAlign: "justify",
              color: "white",
            }}
            className="text-blue"
          >
            Forget Password?
          </a>
          <br />
          <br />
          <br />

          <br />
          <br />
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
