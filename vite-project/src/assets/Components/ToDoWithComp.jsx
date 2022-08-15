import React from "react";
import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

const TodoWithComp = () => {
  const [addtask, settask] = useState("");
  const [taskList, settaskList] = useState([]);

  const _handleClick = () => {
    const data = {
      id: new Date().getTime(),
      title: addtask,
    };
    settaskList([...taskList, data]);
    settask("");
  };

  const _handleDelete = (param) => {
    let finalTaskList = taskList.filter((item) => {
      if (item.id != param) {
        return item;
      }
    });

    settaskList(finalTaskList);
  };
  const _handleEdit = (param) => {
    let newNote = prompt("enter your text");
    if (newNote === "" || newNote === null) {
      return;
    }
    // console.log(newNote);
    // console.log("edit",param);
    const taskListCopy = [...taskList];
    for (let i = 0; i < taskListCopy.length; i++) {
      console.log(taskListCopy[i].id);
      if (taskListCopy[i].id === param) {
        console.log(true);
        taskListCopy[i].title = newNote;
      }
    }
    settaskList(taskListCopy);
  };
  console.log(taskList);
  return (
    <>
      <p>Enter your tasks</p>
      {/* <input
        type="text"
        value={addtask}
        onChange={(e) => settask(e.target.value)}
      /> */}
      <InputComponent
        type="text"
        value={addtask}
        onChangeInput={(e) => settask(e.target.value)}
      ></InputComponent>
      {/* <button onClick={_handleClick}>Add Task</button> */}
      <ButtonComponent clickHandle={_handleClick} label="Add your task" />
      <ul>
        {taskList.map((item) => {
          return (
            <li key={item.id}>
              {item.title}
              <ButtonComponent
                clickHandle={() => _handleDelete(item.id)}
                label="Delete task"
              ></ButtonComponent>
              {/* <button onClick={() => _handleDelete(item.id)}>delete</button> */}
              {/* <button onClick={() => _handleEdit(item.id)}>Edit</button> */}
              <ButtonComponent
                clickHandle={() => _handleEdit(item.id)}
                label="Edit task"
              ></ButtonComponent>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoWithComp;
