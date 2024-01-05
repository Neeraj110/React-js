
import { useState } from 'react'
import './App.css'

function App() {

  let [count , setCount] = useState(5)

  const addValue = () =>{
    setCount( count + 1)
    if(count >= 12 ){
      setCount(count)  
    }
  }
  const removeValue = () =>{
    setCount(count - 1)

    if(count <= 0 ){
      setCount(count)  
    }
  }
  return (
    <>
      <h1>Counter Value: {count}</h1>
      <button
      onClick={addValue}
      >Add Value {count}</button>
      <br />
      <br />
      <button
      onClick={removeValue} 
      >Remove Value {count}</button>
    </>
  )
}

export default App
