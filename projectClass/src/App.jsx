import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './Components/Demo'
import Expression from './Components/Expression'
import Employee from './Components/Employee'
import ComponentA from './Components/ComponentA.jsx'
import Component1A from './Components/Component1A.jsx'
import Component2A from './Components/Component2A.jsx'
import Component3A from './Components/Component3A.jsx'
import ComponentC from './Components/ComponentC.jsx'
import Parent from './Components/Parent.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
            {/* <Demo /> */}
            {/* {<Expression/>}  */}
            {/* {<Employee />} */}
            {/* {<ComponentA/>} */}
            {/* {<Component1A></Component1A>} */}
            {/* {<Component2A/>} */}
            {/* {<Component3A/>} */}
            {/* {<ComponentC/>} */}
            {<Parent/>}
       </div>
    </>
  )
}

export default App
