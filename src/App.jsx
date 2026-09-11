import { useState } from 'react'
import './App.css'
import React from 'react'

function App(){
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1> COUNT is {count} </h1>
        <button onClick = { () => setCount(count + 1 )}>
          Click Me
         </button>
         <div>
          < Hobbies hobbies = "Dancing"/>
          < Hobbies hobbies = "Youtuber"/>
          < Hobbies hobbies = "Music"/>
         </div>
    </div>
  )
}

function Hobbies({hobbies}){
  return <h2> My hobbies are {hobbies} </h2>
}
export default App