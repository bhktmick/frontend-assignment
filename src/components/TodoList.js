import React from "react";

function TodoList({ todoList }) {
  return (
    <div className="todo-list">
      <h2>{todoList.title}</h2>
      <button>Add Todo</button>
      <ul className="todos">
        {todoList.todos.map(todo => (
          <li key={todo.id} className="todo">
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
