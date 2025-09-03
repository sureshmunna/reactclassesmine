import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    let navigate = useNavigate()
    let [formData,setFormData]=useState({
        userName:"",
        passWord:""
    })
    let {userName,passWord}=FormData;
    let handleChange= (e)=>{
        let{name,value}=e.target;
        setFormData({...formData,[name]:value})
    }
    let handleSubmit =(e)=>{
        e.preventDefault();
        navigate("/Home")
        setFormData({
            userName:"",
            passWord:""
        })
    }
  return (
    <>
    <div >
            <label htmlFor="">User Name</label>
            <input type="text" value={userName} onChange={handleChange}/>
          </div>
          <div >
            <label htmlFor="">Password</label>
            <input type="text" value={passWord} onChange={handleChange} />
          </div>
          
          <div >
            <input type="submit" onClick={handleSubmit} text="submit" />
          </div>
    </>
  )
}

export default Register