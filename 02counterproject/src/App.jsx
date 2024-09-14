import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   //const counter =10
   let [counter,maincounter]=useState(15)

   const addvalue = () =>{
    if(counter<20){

    maincounter(counter+1)
    }

   }

   const removevalue = () =>{
    if(counter>0){

    maincounter(counter-1)
    }
   }


  return (
    <>
      <h1>|| React Counter ||</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addvalue}>Add value +{counter}</button><br /><br />
      <button onClick={removevalue}>Reamove value -{counter}</button>
    </>
  )
}

export default App
