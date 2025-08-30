import { useEffect, useState } from "react";

let Title = () => {
  let [count, setCount] = useState(0);
  let [userName, setUserName] = useState();
  useEffect(() => {
    console.log("useEfect");
    
    document.title = `you clicked ${count} times`;
  },[count]);
  return (
    <>
      <input
        type="text"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      ></input>
      <h1>count:{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increament
      </button>
    </>
  );
};
export default Title;
