import { NavLink } from "react-router-dom";
import "./sidelink.css";

function Sidelink({ target,content }) {
  return (
    <NavLink className="sidelink">
      <p>{ content}</p>
    </NavLink>
  );
}

export default Sidelink;
