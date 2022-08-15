import React from "react";
import { useState } from "react";

const TodoWithEdit = () => {
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
    console.log("ln25", finalTaskList, taskList);

    settaskList(finalTaskList);
  };

  const _handleEdit = (param) => {
    let newNote = prompt("enter your text");
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
      <input
        type="text"
        value={addtask}
        onChange={(e) => settask(e.target.value)}
      />
      <button onClick={_handleClick}>Add Task</button>
      <ul>
        {taskList.map((item) => {
          return (
            <li key={item.id}>
              {item.title}
              <button onClick={() => _handleDelete(item.id)}>delete</button>
              <button onClick={() => _handleEdit(item.id)}>Edit</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoWithEdit;
