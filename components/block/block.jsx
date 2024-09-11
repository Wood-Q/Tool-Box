import React from "react";
import { NavLink } from "react-router-dom";
import "./block.css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm"; // 引入插件

function Block({ target, content }) {
  const markdowncontent = `
  ### ${content}
  `;

  return (
    <NavLink to={target} className="block">
      <Markdown>{markdowncontent}</Markdown>
    </NavLink>
  );
}

export default Block;
