import { createContext, useState } from 'react'
export let mycontect3 = createContext();
const GlobalContext3 = (props) => {

    let [val, setVal] = useState([1, 2, 3, 4, 5]);
    return (
        <div>
            <mycontect3.Provider value={{ val, setVal }}>
                {props.children}
            </mycontect3.Provider>
        </div>

    )
}

export default GlobalContext3;
