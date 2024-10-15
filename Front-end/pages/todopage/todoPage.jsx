import "./todoPage.css";
import { useEffect, useState } from "react";

function TodoPage() {
  const [todo, setTodo] = useState(""); // 当前输入的任务
  const [todos, setTodos] = useState([]); // 已添加的任务列表

  // 获取任务列表的函数
  const fetchTodos = () => {
    fetch("http://localhost:8080/api/v1/todos/getAllTodo")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("获取任务列表失败:", error));
  };

  // 使用 useEffect 在组件加载时获取任务列表
  useEffect(() => {
    fetchTodos();
  }, []);

  function handleCreate() {
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
        // 请求成功后，重新获取最新的任务列表
        fetchTodos();
        setTodo(""); // 清空输入框
      })
      .catch((error) => console.error("请求失败:", error)); // 捕获并显示错误
  }

  // function handleDelete() {
  //   // 发送请求删除待办事项
  //   fetch("http://localhost:8080/api/v1/todos/deleteTodo", {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ task: todo }),
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("网络请求失败");
  //       }
  //       return res.json
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       // 请求成功后，重新获取最新的任务列表
  //       fetchTodos();
  //       setTodo(""); // 清空输入框
  //     })
  // }

  return (
    <div className="contentss">
      <input
        type="text"
        placeholder="请添加待办事项"
        value={todo}
        onChange={(e) => setTodo(e.target.value)} // 更新输入框内容
      />
      <button onClick={() => handleCreate()}>添加事项</button>
      <div className="container">
        {todos.map((item, index) => (
          <div key={index}>
            {item.id}
            {item.task}
            <input type="checkbox" />
            {/* <button onClick={()=>handleDelete()}>❌</button> */}
          </div>
          // 显示已添加的任务
        ))}
      </div>
    </div>
  );
}

export default TodoPage;
