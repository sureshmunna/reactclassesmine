import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './Components/Title'
import FetchFunction from './Components/FetchFunction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        {/* {<Title/>} */}
        {<FetchFunction/>}
    </>
  )
}

export default App
