import { useState } from 'react'
import InLineCSS from './Components/InLineCSS'
import InternalCSS from './Components/InternalCSS'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* {<InLineCSS/>} */}
      {<InternalCSS/>}
      
    </>
  )
}

export default App
