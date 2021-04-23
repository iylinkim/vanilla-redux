import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

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

//configureStore 사용하면 Redux Developer Tools 사용할 수 있음
const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
