import React from "react";

function TodoLists({ todoLists }) {
  return (
    <div className="todo-lists">
      {todoLists.map(todoList => (
        <div key={todoList.id} className="todo-list">
          <h2>{todoList.title}</h2>
          <p>Count: {todoList.todos.length}</p>
        </div>
      ))}
    </div>
  );
}

export default TodoLists;
