//Type rafce for boilerplate, & remove import react

import Task from "./Task"

const Tasks = ({tasks}) => {
  return (
    <>
    {tasks.map((task)=>(
    <Task key={task.id} task = {task}/>
    ))}
    </>
  )
}

export default Tasks