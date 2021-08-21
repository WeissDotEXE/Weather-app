import { createStore } from "redux";

const initialState = {
  city: "",
  american: false,
};

const weatherReducer = (state = initialState, action) => {
  if (action.type === "userInput") {
    return {
      city: action.value,
      american: state.american,
    };
  }

  if (action.type === "changeUnits") {
    return {
      american: !state.american,
      city: state.city,
    };
  }
  return state;
};

const store = createStore(
  weatherReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
