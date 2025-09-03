import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  let navigate = useNavigate()
  let [formData, setFormData] = useState({
    userName: "",
    passWord: ""
  })
  let { userName, passWord } = formData;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }
  let handleSubmit = (e) => {
    e.preventDefault();
    navigate("/")
    setFormData({
      userName: "",
      passWord: ""
    })
  }
  return (
    <>
      <div className='flex item-center justify-center min-h-screen bg-red-100'>
        <form onSubmit={handleSubmit} className='bg-white shadow-lg rounded-2xl p-8 w-full max-w-md'>
          <h2 className='text-2xl font-bold text-center mb-6 text-grey-700'>Register</h2>
          <div className="mb-4">
            <label className='block text-grey-600 font-medium mb-2' htmlFor="">User Name</label>
            <input className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none' type="text" name="userName" value={userName} onChange={handleChange} />
          </div>
          <div className="mb-6">
            <label className='block text-grey-600 font-medium mb-2' htmlFor="">Password</label>
            <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" type="password" name="passWord" value={passWord} onChange={handleChange} />
          </div>
          <div >
            <input type="submit" text="submit" className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300' />
          </div>
        </form>
      </div>
    </>
  )
}

export default Register