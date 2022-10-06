import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        //Form validation (ensure correct type of input ie 'text')
        if(!text){
            alert('Please add a task')
            return
        }
        //If the validation passes call onAdd (in App.js) which calls addTask <AddTask onAdd={addTask}/> 
        onAdd({ text, day, reminder })
        
        //Clear fields
        setText('')
        setDay('')
        setReminder(false)

    }
  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input 
            type='text' 
            placeholder='Add Task' 
            value={text} 
            onChange={(e)=> setText(e.target.value)} />
        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input 
            type='text' 
            placeholder='Add Day & Time'
            value={day} 
            onChange={(e)=> setDay(e.target.value)} />
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input 
            type='checkbox' 
            checked={reminder} 
            value={reminder} 
            onChange={(e)=> setReminder(e.currentTarget.checked)} />
        </div>

        <input type='submit' value='Save Task' className="btn btn-block"/>

    </form>
  )
}

export default AddTask