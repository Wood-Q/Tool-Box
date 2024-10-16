import "./todoPage.css";
import { useEffect, useState } from "react";

function TodoPage() {
  const [todo, setTodo] = useState(""); // 当前输入的任务
  const [todos, setTodos] = useState([]); // 已添加的任务列表

  // 获取任务列表的函数
  const fetchTodos = () => {
    fetch("http://localhost:8080/api/v1/todos/getAllTodo")
      .then((res) => res.json())
      .then((data) => {
        // 假设返回的数据包含每个任务的 `finished` 字段
        setTodos(data);
      })
      .catch((error) => console.error("获取任务列表失败:", error));
  };

  // 使用 useEffect 在组件加载时获取任务列表
  useEffect(() => {
    fetchTodos();
  }, []);

  function handleCreate() {
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
        return res.json();
      })
      .then(() => {
        fetchTodos(); // 重新获取任务列表
        setTodo(""); // 清空输入框
      })
      .catch((error) => console.error("请求失败:", error));
  }

  // 切换任务的完成状态
  const handleToggleFinish = (id, task) => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, iscompleted: !item.iscompleted } : item
      )
    );
    fetch("http://localhost:8080/api/v1/todos/updateTodo", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: task }),
    });
  };

  return (
    <div className="contentss">
      <input
        type="text"
        placeholder="请添加待办事项"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleCreate}>添加事项</button>
      <div className="container">
        {todos.map((item) => (
          <div key={item.id} className={item.iscompleted ? "finish" : ""}>
            <span>{item.task}</span>
            <input
              type="checkbox"
              checked={item.iscompleted || false}
              onChange={() => handleToggleFinish(item.id, item.task)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoPage;
