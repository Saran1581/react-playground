import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import {Table, Input} from "antd";
import { useTableSearch } from "./useTableSearch";
import { userColumns } from "./columns";


const { Search } = Input;

const Home = () => {
  const [allUsers, setallUsers] = useState([]);

  const getAllUsers = () => {
    axios
      .get("http://localhost:5000/getallusers")
      .then((data) => {
        setallUsers(data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:5000/deleteuser?userid=` + id)
      .then((data) => {
        if (data?.data?.success == true) {
          alert(data?.data?.message);
          getAllUsers();
        } else {
          alert("Network error. please try later");
        }
      })
      .catch((err) => console.log(err));
  };
  const [searchVal, setSearchVal] = useState(null);

  const { filteredData, loading } = useTableSearch({
    searchVal,
    retrieve: getAllUsers,
  });

  return (
    <div className="home-bg">
      <div
        className="container-home"
        style={{ backgroundColor: "azure", width: "1200px", margin: "auto" }}
      >
        <center>
        <Search
        onChange={(e) => setSearchVal(e.target.value)}
        placeholder="Search"
        enterButton
        style={{ position: "sticky", top: "0", left: "0" }}
      />
          <h3>Home Page</h3>
          <a style={{ float: "right", color: "red" }} href="/">
            Logout
          </a>
          <br />
          <br></br>
          <table>
            <tr>
              <th>Name</th>
              <th>Dept</th>
              <th>Email</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Placed Status</th>
              <th>Action</th>
            </tr>
            {allUsers?.map((user) => {
              return (
                <tr>
                  <td>{user?.name}</td>
                  <td>{user?.Dept}</td>
                  <td>{user?.email}</td>
                  <td>{user?.password}</td>
                  <td>{user?.gender}</td>
                  <td>{user?.Address}</td>
                  <td>{user?.status}</td>
                  <td>
                    <button
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteUser(user?._id)}
                    >
                      Delete user
                    </button>
                    <button
                      style={{ cursor: "pointer", marginLeft: "25px" }}
                      onClick={() => {
                        window.location.href = `/edituser/${user?._id}`;
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </center>
      </div>
    </div>
  );
};

export default Home;
