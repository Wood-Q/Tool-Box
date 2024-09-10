import { NavLink } from "react-router-dom";
import "./sidelink.css";

function Sidelink({ target }) {
  return (
    <NavLink className="sidelink">
      <p>Git命令查询</p>
    </NavLink>
  );
}

export default Sidelink;
