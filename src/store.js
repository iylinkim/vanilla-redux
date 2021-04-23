import { configureStore, createSlice } from "@reduxjs/toolkit";

//createSlice action 뿐만 아니라 reducer 자동으로 제공
const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
  },
});

//configureStore 사용하면 Redux Developer Tools 사용할 수 있음
const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
