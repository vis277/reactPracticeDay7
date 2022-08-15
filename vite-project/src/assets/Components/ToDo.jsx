import React from "react";
import { useState } from "react";

const Todo=()=>{
const[addtask,settask]=useState('');
const[taskList,settaskList]=useState([]);

const _handleClick=()=>{
const data={
    id:new Date().getTime(),
    title: addtask,
}
settaskList([...taskList,data])
settask('');

}

const _handleDelete=(param)=>{
   
    let finalTaskList= taskList.filter((item)=>{
        if(item.id!=param){
            return item
        }
    })
    
    settaskList(finalTaskList)
}
    return(
        <>
        <p>Enter your tasks</p>
        <input type="text" value={addtask} onChange={(e)=>settask(e.target.value)}/> <button onClick={_handleClick}>Add Task</button>
        <ul>
        {taskList.map((item) => {
            return <li key={item.id}>{item.title}<button onClick={()=>_handleDelete(item.id)}>delete</button></li>;
          })}
        
        </ul>
        </>
    )
}

export default Todo