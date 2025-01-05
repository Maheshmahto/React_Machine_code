import React, { useState } from 'react'
import './todo.css'
const Todo = () => {
    const [tasklist,setTasklist] = useState([]);
    const [task, setTask] = useState("");
    const [editIndex, seteditIndex]= useState(null);

 const handleAddOrUpdateTask = ()=>{

    if(editIndex !==null){
        const updatetasklist = [...tasklist];
        updatetasklist[editIndex]=task;
        setTasklist(updatetasklist);
        seteditIndex(null);
    }
    else{
     setTasklist([...tasklist,task]);
    }
    setTask("");
 }
 const handleEditTask = (index)=>{
    setTask(tasklist[index]);
    seteditIndex(index);
 };
//  current element and their index
 const handleDeleteTask = (index)=>{
    setTasklist( tasklist.filter( (element,i)=> i !== index));
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
                tasklist.map( (t,index)=>(
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
