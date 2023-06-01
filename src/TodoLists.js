import React, { useState } from "react";
import TodoList from "./TodoList";

function TodoLists() {
  const [todoLists, setTodoLists] = useState([]);

  const handleAddTodoList = () => {
    const newTodoList = {
      id: Date.now(),
      todos: [],
    };
    setTodoLists([...todoLists, newTodoList]);
  };

  return (
    <div className="TodoLists">
      <button onClick={handleAddTodoList}>Add Todo List</button>
      {todoLists.map(todoList => (
        <TodoList key={todoList.id} todoList={todoList} />
      ))}
    </div>
  );
}

export default TodoLists;
