import { createAction } from "@reduxjs/toolkit";
import { createStore } from "redux";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state]; //createAction으로 만들었기 때문에 payload 가지고 있음
    case deleteToDo.type:
      return state.filter((todo) => todo.id !== action.payload); //createAction으로 만들었기 때문에 payload 가지고 있음
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
