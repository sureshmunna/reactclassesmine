import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Focus from './Components/focus'
import Song from './Components/song'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* {<Focus/>} */}
        {<Song/>}
      </div>
        
    </>
  )
}

export default App
