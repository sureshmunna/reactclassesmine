import React from 'react'

const Button = (props) => {
    console.log(`${props.children} is rendering`);
    
  return (
    <div>
        <button onClick={props.handleClick}>{props.children}</button>
    </div>
  )
}

export default React.memo(Button) 