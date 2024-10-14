import "./todoPage.css";
import { useState } from "react";

function TodoPage() {
  const [todo, setTodo] = useState(""); // 当前输入的任务
  const [todos, setTodos] = useState([]); // 已添加的任务列表

  function handleClick() {
    // 发送请求创建新的待办事项
    fetch("http://localhost:8080/api/v1/todos/createTodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: todo }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("网络请求失败");
        }
        return res.json(); // 转换为 JSON
      })
      .then((data) => {
        console.log(data);
        // 请求成功后，更新任务列表并清空输入框
        setTodos([...todos, data]); // 将新任务添加到任务列表中
        setTodo(""); // 清空输入框
      })
      .catch((error) => console.error("请求失败:", error)); // 捕获并显示错误
  }

  return (
    <div className="contentss">
      <input
        type="text"
        placeholder="请添加待办事项"
        value={todo}
        onChange={(e) => setTodo(e.target.value)} // 更新输入框内容
      />
      <button onClick={handleClick}>添加事项</button>
      <div className="container">
        {todos.map((item, index) => (
          <div key={index}>{item.task}</div> // 显示已添加的任务
        ))}
      </div>
    </div>
  );
}

export default TodoPage;
