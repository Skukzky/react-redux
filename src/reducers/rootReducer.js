export const initialValue = {
  user: "Siapun Lah",
  counter: 100000,
};

// reducer
export const rootReducer = (state, action) => {
  if (action.type === "increment") {
    return { ...state, counter: state.counter + 1 };
  } else if (action.type === "decrement") {
    return { ...state, counter: state.counter - 1 };
  } else if (action.type === "incrementSpec") {
    return { ...state, counter: state.counter + action.payload };
  } else if (action.type === "decrementSpec") {
    return { ...state, counter: state.counter - action.payload };
  } else if (action.type === "reset") {
    return { ...state, counter: 0 };
  }
  // DEFAULT CASE
  else {
    return state;
  }
};
