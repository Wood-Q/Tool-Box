import React from "react";
import Sidelink from "../sidelink/sidelink";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="shadow">
        <NavLink to="/" className="title">
          <p>Tool-Box</p>
        </NavLink>
        <p className="slogan">木乔的工具小箱</p>
      </div>
      <Sidelink target="/gitpage" content="Git命令查询"/>
      <Sidelink target="/randomPorts" content="随机端口号"/>
      <Sidelink target="/httpCode" content="HTTP状态码"/>
      <Sidelink target="/UpLow" content="大小写转换"/>
      <Sidelink target="/weather" content="天气查询"/>
    </div>
  );
}

export default Sidebar;
