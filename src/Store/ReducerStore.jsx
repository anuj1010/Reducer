export const ToDoReducer = (initialState, action) => {
  let newState = initialState;

  if (action.type == "Add") {
    console.log("initialval", initialState);
    newState = [...initialState, action.payload.item];
  } else if (action.type == "Delete") {
    newState = initialState.filter((val) => {
      if (!(val == action.payload.item)) {
        return val;
      }
    });
  }
  return newState;
};
