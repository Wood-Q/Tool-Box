import React from "react";
import { NavLink } from "react-router-dom";
import "./block.css";

function Block({target,content}) {
  return (
    <NavLink to={target} className="block">
      {content}
    </NavLink>
  )
}

export default Block;
