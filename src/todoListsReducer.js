const initialState = [];

const todoListsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO_LIST":
      return [...state, action.payload];
    case "ADD_TODO":
      return state.map(todoList => {
        if (todoList.id === action.payload.todoListId) {
          return {
            ...todoList,
            todos: [...todoList.todos, action.payload.todo],
          };
        }
        return todoList;
      });
    case "UPDATE_TODO":
      return state.map(todoList => {
        if (todoList.id === action.payload.todoListId) {
          const updatedTodos = todoList.todos.map(todo => {
            if (todo.id === action.payload.todoId) {
              return {
                ...todo,
                ...action.payload.updatedTodo,
              };
            }
            return todo;
          });
          return {
            ...todoList,
            todos: updatedTodos,
          };
        }
        return todoList;
      });
    default:
      return state;
  }
};

export default todoListsReducer;
