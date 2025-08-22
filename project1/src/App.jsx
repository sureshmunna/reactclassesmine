import { useState } from 'react'

import Username from './components/Username'
import Information from './components/Information'
import Demo from './components/demo'
import Independence from './components/Independence'
import Childrenprops from './components/ChildrenProps'
import ComponentC from './components/ComponentC'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import Counter from './components/counter'
import Voting from './components/voting'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <voting /> */}
        {/* <Username />
        < Information /> */}
        {/* <Demo></Demo> */}
        {/* <Independence></Independence> */}
        {/* < Childrenprops></Childrenprops> */}
        {/* <ComponentC></ComponentC> we dont have to call the children class */}
        {/* {<ComponentA />} { /* we have to call the parent function  */} 
        {/* {<ComponentB/>} */}
        {/* {<Counter/>} */}
        { <Voting/>}
      </div>
      
    </>
  )
}

export default App
