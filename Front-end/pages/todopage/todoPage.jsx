import "./todoPage.css";

function TodoPage() {
  return (
    <div className="contentss">
          <input type="text"></input>
          <button>添加事项</button>
          <li>
              <ul>事项1</ul>
              <ul>事项2</ul>
              <ul>事项3</ul>
          </li>
    </div>
  );
}

export default TodoPage;
