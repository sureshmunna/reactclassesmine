import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UncontrolledForm from './Components/UncontrolledForm'
import ControlledForm from './Components/ControlledForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        {/* {<UncontrolledForm/>} */}
        {<ControlledForm/>}

    </>
  )
}

export default App
