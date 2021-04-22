import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// 오직 이 함수에서만 data를 modify할 수 있음
const countModifier = (count = 0) => {
  return count;
};

const countStore = createStore(countModifier);
console.log(countStore.getState())

