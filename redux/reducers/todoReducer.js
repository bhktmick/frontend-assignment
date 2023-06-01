const initialState = {
  todoLists: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      // Handle adding a todo to the state
      return state;
    case "EDIT_TODO":
      // Handle editing a todo in the state
      return state;
    // Add more cases for other actions
    default:
      return state;
  }
};

export default todoReducer;
