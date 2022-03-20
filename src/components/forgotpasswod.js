import React, { useState } from "react";
import axios from "axios";
import "./forgetpass.css";

const Resetpassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailVerify, setEmailVerify] = useState(false);
  const [userId, setUserId] = useState("");
  const [error, setError] = useState(false);

  const verifyEmail = () => {
    let userObj = {
      email: email,
    };
    axios
      .post(`http://localhost:5000/verifyemail`, userObj)
      .then((data) => {
        console.log(data?.data);
        let status = data?.data?.success;
        let userId = data?.data?.id;
        if (status == true) {
          setUserId(userId);
          setEmailVerify(true);
        } else {
          setUserId("");
          setEmailVerify(false);
          alert(data?.data?.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resetPassword = () => {
    if (password != confirmPassword) {
      setError(true);
    } else {
      setError(false);
      let userObj = {
        userid: userId,
        password: password,
      };
      axios
        .post(`http://localhost:5000/resetpassword`, userObj)
        .then((data) => {
          if (data?.data?.success == true) {
            alert(data?.data?.message);
            window.location.href = "/login";
          } else {
            alert("Network error Try later");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div class="content">
      {emailVerify ? (
        <div>
          <h1>Enter your new password</h1>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New password"
            className="input"
          />
          <br />
          <br />
          <input
            type="text"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            className="input"
          />
          <br />
          <br />
          {error ? <span style={{ color: "red" }}>Password mismatch</span> : ""}
          <br />
          <br />
          <button
            style={{ cursor: "pointer" }}
            onClick={resetPassword}
            className="btn"
          >
            RESET
          </button>
        </div>
      ) : (
        <>
          <h1>Enter your Email</h1>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="input"
          />
          <br />
          <br />
          <button
            style={{ cursor: "pointer" }}
            onClick={verifyEmail}
            className="btn"
          >
            Verify
          </button>
        </>
      )}
    </div>
  );
};

export default Resetpassword;
//     axios
//     .post("http://localhost:5000/resetpassword")
//     .then((data) => {
//       console.log(data.data);
//       if (password == password) {
//         alert(data?.data?.message);
//         window.location.href = "/login";
//       } else {
//         alert("Network error.. try later");
//       }
//     })
//     .catch((err) => console.log(err));
// };

// return (
//   <div>
//     <h1>Enter your new password</h1>
//     <input type="text" value="password" placeholder="Existing password" className="input"/>
//     <input type="text" value="newpassword" placeholder="New password" className="input"/>
//     <button style={{ cursor: "pointer" }}>OK</button>
//   </div>
// );
