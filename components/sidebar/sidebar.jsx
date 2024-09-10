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
      <Sidelink target="/gitpage" />
    </div>
  );
}

export default Sidebar;
