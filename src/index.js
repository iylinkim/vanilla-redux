import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// 오직 이 함수에서만 data를 modify할 수 있음
// reducer가 return하는 모든 것은 data가 됨
const countModifier = (count = 0, action) => {
  if (action.type === "add") {
    return count + 1;
  } else if (action.type === "minus") {
    return count - 1;
  } else {
    return count;
  }
};

const onChange = () => {
  number.innerText = countStore.getState();
};

const countStore = createStore(countModifier);

//subscribe(): store 안에 있는 변화들을 알려줌, store에 변화가 있을 때마다 함수 호출됨
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: "add" });
};
const handleMinus = () => {
  countStore.dispatch({ type: "minus" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
