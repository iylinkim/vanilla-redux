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

const countStore = createStore(countModifier);

// reducer(countModifier)에 메시지 보내는 방법(action)
countStore.dispatch({ type: "add" });
countStore.dispatch({ type: "add" });
countStore.dispatch({ type: "add" });
countStore.dispatch({ type: "add" });
countStore.dispatch({ type: "add" });
countStore.dispatch({ type: "minus" });

console.log(countStore.getState());
