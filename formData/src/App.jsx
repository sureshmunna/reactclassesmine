import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UncontrolledForm from './Components/UncontrolledForm'
import ControlledForm from './Components/ControlledForm'
import SingleControlledForm from './Components/SingleControlledForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        {/* {<UncontrolledForm/>} */}
        {/* {<ControlledForm/>} */}
        {<SingleControlledForm/>}

    </>
  )
}

export default App
