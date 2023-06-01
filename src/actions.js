export const addTodoList = todoList => {
  return {
    type: "ADD_TODO_LIST",
    payload: todoList,
  };
};

export const addTodo = (todoListId, todo) => {
  return {
    type: "ADD_TODO",
    payload: {
      todoListId,
      todo,
    },
  };
};

export const updateTodo = (todoListId, todoId, updatedTodo) => {
  return {
    type: "UPDATE_TODO",
    payload: {
      todoListId,
      todoId,
      updatedTodo,
    },
  };
};
