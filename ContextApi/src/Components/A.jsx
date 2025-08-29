import { useContext } from "react"
import { mycontext } from "../Context/GlobalContext"

const A = () => {
    let { count, setCount } = useContext(mycontext)
    return (
        <>
            <h1>First Global Context</h1>
            <h1>count in A: {count}</h1>
            <button onClick={() => { setCount(prev => prev + 1) }}>Increament</button>
        </>
    )
}
export default A