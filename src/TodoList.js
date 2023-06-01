import React, { useState } from "react";
import Todo from "./Todo";

function TodoList({ todoList }) {
  const [todos, setTodos] = useState(todoList.todos);

  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      title: "",
      description: "",
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="TodoList">
      <h2>Todo List</h2>
      <button onClick={handleAddTodo}>Add Todo</button>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
