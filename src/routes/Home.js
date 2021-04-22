import React, { useState } from "react";
import { connect } from "react-redux";

const Home = (props) => {
    console.log(props)
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
};

//함수명은 반드시 mapStateToProps로 지정해야함
const mapStateToProps = (state) => {
  // state: redux의 state
  // ownProps: component의 ownProps
  // return 하는 값들은 component의 props에 다 포함됨
  return {toDos:state};
};

//connect()는 store로 부터 state를 가져다 줌, Component(Home)으로 보내는 props에 props가 추가될 수 있도록 해줌
export default connect(mapStateToProps)(Home);
