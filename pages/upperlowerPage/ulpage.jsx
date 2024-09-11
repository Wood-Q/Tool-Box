import "./ulpage.css";
import React, { useState } from "react";

function UpperLowerPage() {
  const [word, setword] = useState("");

  // 处理输入框内容的变化并将其转换为大写
  const handleChange = (e) => {
    setword(e.target.value.toUpperCase());
  };

  return (
    <div className="contents">
      <input
        type="text"
        placeholder="大小写"
        className="word"
        value={word} // 绑定输入框的值
        onChange={handleChange} // 输入框内容改变时更新状态并转换为大写
      />
      <h3>大写：{word}</h3> {/* 显示当前的 word */}
    </div>
  );
}

export default UpperLowerPage;
