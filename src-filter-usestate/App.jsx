import React from "react";
import { useState } from "react";
import './index.css'

function App() {
    const [tasklist, setTasklist] = useState([]);

    const [newTask, setNewTask] = useState("Hello");

    const [message, setMessage] = useState("");


    const addTask = () => {      
     const newTaskitem =  {
        id : tasklist.length === 0 ? 1 : tasklist[tasklist.length-1].id+1,
        taskName : newTask
      }
      setTasklist([...tasklist, newTaskitem])
    }

    const deleteItem = (id) =>{
      const newTaskList = tasklist.filter((task)=>{
        return task.id !== id
      })
      setTasklist(newTaskList)
      setMessage(id + " Deleted")
    }
    
    

  return (
    <div>    
         <div className="container">
          <div className="inputItem">
            <input type="text" placeholder='Enter task' onChange={(e)=>setNewTask(e.target.value)}/>
            <button onClick={addTask}>Add Task</button>
            </div>  
          <div className="listItems">
            <h3>Total record : {tasklist.length}</h3>
            <h3>Item ID : {message}</h3>
          <ul>
          {
            tasklist.map((task)=>{
              return(
                <li key={task.id}>
                <span>{task.id}</span>
                <span>{task.taskName}</span>
                <button onClick={()=>deleteItem(task.id)}>Remove</button>
                </li>
              )
            })
          }
        </ul>
          </div>          
      </div>
    </div>
  );
}

export default App
