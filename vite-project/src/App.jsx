import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Todo from "./assets/Components/ToDo";
import TodoWithEdit from "./assets/Components/ToDoWithEdit";
import TodoWithComp from "./assets/Components/ToDoWithComp";
import ReactStrapPractice from "./assets/Components/ReactStrapPractice";

function App() {
  return (
    <>
      <TodoWithEdit></TodoWithEdit>
      {/* <TodoWithComp /> */}
      {/* <ReactStrapPractice></ReactStrapPractice> */}
    </>
  );
}

export default App;
