import React from 'react'

const InternalCSS = () => { 
    let mystyle={
        color:"red",
        backgroundcolor:"black",
        borderRadius:"50%",
        height :"400px",
        width:"50%"
    }

    let yourStyle={
        color:"green",
        fontSize:"50px",
        fontWeight:"900",
        textTransform :"uppercase"
    }
  return (
    <>
        <h1 style={mystyle}> internal CSS</h1>
        <h1 style={{...mystyle,...yourStyle}}>Hello</h1>
    </>
  )
}

export default InternalCSS