import React from "react";
import "./dashboard.css";
import {
    Card,
    Col,
    Row,
    DownOutlined,
    Progress,
    Tooltip,
    Button,
    Menu,
    Dropdown,
    message,
  } from "antd";

const Dashboard = () => {

    return(
        <div>
            Dashboard
            <div className= "Cards">
            <Card
        title="IT"
        bordered={false}
        style={{ width: 250, height: 300, margin: "auto" }}
      >
        <p>BOYS - 40</p> <p>GIRLS - 13</p>{" "}
        <p>
          <b>Total - 53</b>
        </p>
        <div>
          <Tooltip title="Boys">
            <Progress percent={90} success={{ percent: 90 }} />
          </Tooltip>

          <Tooltip title="Girls">
            <Progress percent={20} success={{ percent: 20 }} />
          </Tooltip>
        </div>
      </Card>
      <Card
        title="IT"
        bordered={false}
        style={{ width: 250, height: 300, margin: "auto" }}
      >
        <p>PLACED - 40</p> <p>NON PLACED - 13</p>{" "}
        <p>
          <b>Total - 53</b>
        </p>
        <div>
          <Tooltip title="Placed">
            <Progress percent={100} success={{ percent: 100 }} />
          </Tooltip>

          <Tooltip title="Non Placed">
            <Progress percent={80} success={{ percent: 80 }} />
          </Tooltip>
        </div>
      </Card>
      <Card
        title="PROGRESS"
        bordered={false}
        style={{ width: 1100, marginTop: 40, marginLeft: 30 }}
      >
        <h4>2018-2022:</h4>
        <Progress percent={80} steps={8} />
        <br />
        <h4>2019-2023:</h4>
        <Progress percent={90} steps={10} strokeColor="#52c41a" />
      </Card>
      
            </div>
            
        </div>
    );
};

export default Dashboard;