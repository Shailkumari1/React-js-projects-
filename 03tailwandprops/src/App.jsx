import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-black p-5 rounded-2xl mb-4'>Tailwand css Test</h1>

        <Card username="shaily verma" btnText="visit me" />
        <Card username="shail kumari" btnText="visit me" />


     
    </>
  )
}

export default App
