import React, { useState } from 'react'
import './todo.css'
const Todo = () => {
    const [tasks,setTasks] = useState([]);
    const [task, setTask] = useState("");
    const [editIndex, seteditIndex]= useState(null);

 const handleAddOrUpdateTask = ()=>{

    if(editIndex !==null){
        const updateTasks = [...tasks];
        updateTasks[editIndex]=task;
        setTasks(updateTasks);
        seteditIndex(null);
    }
    else{
     setTasks([...tasks,task]);
    }
    // setTask("");
 }
 const handleEditTask = (index)=>{
    setTask(tasks[index]);
    seteditIndex(index);
 };
//  current element and their index
 const handleDeleteTask = (index)=>{
    setTasks( tasks.filter( (element,i)=> i !== index));
 }
  return (
    <>
       <div className="todo-container">
           <h1>Todo App</h1>

           <div className="input-container">
              <input type="text"
              placeholder='enter your task'
              onChange={ (e)=> setTask(e.target.value)}
              value={task}
              />
              <button onClick={handleAddOrUpdateTask}>Add</button>
           </div>
           <ul className='task-list'>
             {
                tasks.map( (t,index)=>(
                    <li key={index} className='task-item'>
                        <span>{t}</span>
                        <div >
                            <button onClick={()=>handleEditTask(index)}>Edit</button>
                            <button onClick={()=>handleDeleteTask(index)}>Delete</button>
                        </div>
                    </li>
                ))
             }
           </ul>
       </div>
    </>
  )
}

export default Todo
