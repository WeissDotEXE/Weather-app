import { createStore } from "redux";

const initialState = {
  city: "",
  american: false,
  error:false
};

const weatherReducer = (state = initialState, action) => {
  if (action.type === "userInput") {
    return {
      city: action.value,
      american: state.american,
      error:state.error
    };
  }

  if (action.type === "changeUnits") {
    return {
      american: !state.american,
      city: state.city,
      error:state.error
    };
  }
  if(action.type==='errorHandler'){
    return{
      american:state.american,
      city:state.city,
      error: !state.error
    }
  }
  return state;
};

const store = createStore(
  weatherReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
