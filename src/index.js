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

//action만 return하는 함수
const addToDo = (text) => {
  return { type: ADD_TODO, text };
};

const deleteToDo = (id) => {
  return { type: DELETE_TODO, id };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state]; //항상 새로운 state를 return 해야함
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};
const store = createStore(reducer);

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((todo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
