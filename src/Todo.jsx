import { useState } from "react";
import './App.css'

function Todo(){

    const[tasks,setTask] = useState([])
    const[taskDes,AddTaskdes] = useState()
    const[finish,SetFinish] = useState(0)
    
    
    function setTaskTodo(){
        const newtask = {
              des:taskDes,
              status:"In progress"
              
        }
        setTask(t => [...t,newtask])

    }
    function RemoveTaskTodo(index){
        setTask(tasks.filter((_,i)=> i !== index))

    }

    function Taskdes(event){
        AddTaskdes(event.target.value)

    }
    function markAsFinished(index){
        SetFinish(finish + 1)
        setTask(tasks.map((task, i) =>
            i === index ? { ...task, status: "Completed" } : task
        ));
        


    }

    return(<div className="todo-container">
        <h1 className="heading">To Do App</h1>
        <h3>Completed : {finish}</h3>
        <div className="input-section">
          <input className="inputfield" type="text" onChange={Taskdes} placeholder="Enter a task" value={taskDes}/>
          <button className="Add-Btn" onClick={setTaskTodo}>SAVE</button>
         
        </div>
      
        <div className="task-list">
          <div className="task-list-header">
            <div>No.</div>
            <div>Todo Item</div>
            <div>Status</div>
            <div>Actions</div>
          </div>
          
          {tasks.map((task, index) => (
            <div className="task-item" key={index}>
              <div>{index + 1}</div>
              <div>{task.des}</div>
              <div>
              <span className={`status ${task.status === "Completed" ? "completed" : "in-progress"}`}>
              {task.status}</span>
              </div>
              <div>
                <button className="action-btn delete-btn" onClick={() => RemoveTaskTodo(index)}>DELETE</button>
                <button className="action-btn finish-btn" onClick={() => markAsFinished(index)}>FINISHED</button>
              </div>
            </div>
          ))}
        </div>
      </div>)

    
    }
export default Todo