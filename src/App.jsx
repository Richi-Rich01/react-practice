import { useState } from 'react'
import './App.css'

const hobbies = ["Dancing", "Youtuber", "Music"]

function App(){
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1> COUNT is {count} </h1>
        <button onClick = { () => setCount(count + 1 )}>
          Click Me
         </button>
          {hobbies.map(function(hobby){
            return <Hobbies hobby={hobby} key={hobby} />
            })
          }
    </div>
  )
}

function Hobbies({hobby}){
  return <h1> My hobbies are {hobby} </h1>
}
export default App