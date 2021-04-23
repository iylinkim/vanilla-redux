import { createAction, createReducer } from "@reduxjs/toolkit";
import { createStore } from "redux";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state]; //createAction으로 만들었기 때문에 payload 가지고 있음
//     case deleteToDo.type:
//       return state.filter((todo) => todo.id !== action.payload); //createAction으로 만들었기 때문에 payload 가지고 있음
//     default:
//       return state;
//   }
// };

//redux toolkit을 사용하면 state를 mutate할 수 있음
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    //state를 mutate할 뿐 아무것도 return하지 않음! (return 하면 오류 발생)
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    //state object를 return 할 수도 있음
    state.filter((todo) => todo.id !== action.payload),
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
