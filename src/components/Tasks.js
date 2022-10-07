//Type rafce for boilerplate, & remove import react

import Task from "./Task"

              //Pass in props from App.js
const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <>
    {tasks.map((task, index)=>(
    <Task 
    key={index} 
    task = {task} 
    onDelete={onDelete} 
    onToggle={onToggle}
    />
    ))}
    </>
  )
}

export default Tasks