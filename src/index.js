import { createStore } from "redux";

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// const ADD = "ADD";
// const MINUS = "MINUS";

// // 오직 이 함수에서만 data를 modify할 수 있음
// // reducer가 return하는 모든 것은 data(state)가 됨
// const countModifier = (count = 0, action) => {
//   switch (action.type) {
//     case ADD:
//       return count + 1;
//     case MINUS:
//       return count - 1;
//     default:
//       return count;
//   }
// };

// const onChange = () => {
//   number.innerText = countStore.getState();
// };

// const countStore = createStore(countModifier);

// //subscribe(): store 안에 있는 변화들을 알려줌, store에 변화가 있을 때마다 함수 호출됨
// countStore.subscribe(onChange);

// //action은 항상 object 형태여야함 (무조건 type을 가짐)
// const handleAdd = () => {
//   countStore.dispatch({ type: ADD });
// };
// const handleMinus = () => {
//   countStore.dispatch({ type: MINUS });
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id:Date.now() }]; //항상 새로운 state를 return 해야함
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};
const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener("submit", onSubmit);
