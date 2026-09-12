import { useState } from 'react'
import './App.css'

function App(){
  const [tasks, setTasks] = useState([
  { text: "learn react", done: false },
  { text: "do laundry", done: false },
  { text: "sleep at 10pm", done: false }
  ])
  const[newTask , setNewTask] = useState("")

  function handleAddTask(){
    if(newTask.trim() === ""){
      return
    }
    setTasks([...tasks, { text: newTask, done: false }])
    setNewTask("")
  }

  function handleDeleteTask(taskText){
    setTasks(tasks.filter(function(task){
      return task.text !== taskText
    }))
  }

  function handleToggleTask(taskText){
    setTasks(tasks.map(function(task){
      if(task.text === taskText){
        return {...task , done: !task.done }
      }
      return task
    }))
  }

  return(
    <div>
      <h1>Tasks Tracker</h1>
      <input
        type="text"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button onClick={handleAddTask}>Add Tasks</button>
      
      <ul>
        {tasks.map(function(task){
          return <li key={task.text}>
            <span style={{textDecoration: task.done ? "line-through" : "none"}}>{task.text}</span>
            <button onClick={() => handleToggleTask(task.text)}>Completed</button>
            <button onClick={() => handleDeleteTask(task.text)}>Delete</button>
          </li>
        })}
      </ul>
    </div>
  )
}

export default App