const initialState = [];

const todoListsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO_LIST":
      return [...state, action.payload];
    case "ADD_TODO":
      // Add logic to handle adding a todo to a specific todo list
      return state;
    case "UPDATE_TODO":
      // Add logic to handle updating a todo in a specific todo list
      return state;
    default:
      return state;
  }
};

export default todoListsReducer;
