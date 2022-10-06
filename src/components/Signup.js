import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NoteContext from '../context/NoteContext'
// import { Link } from 'react-router-dom'


const Signup = (props) => {
  const context = useContext(NoteContext)
  const { showAlert, darkmode } = context;
  const host = "http://localhost:5000"
  const navigate = useNavigate();
  // onchange 
  const [data, setData] = useState({ name: "", email: "", password: "" })
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  // onsbmit data
  const onSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = data;
    // fetch the data call api
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password }) // body data type must match "Content-Type" header
    });
    const json = await response.json();
    if (json.success) {
      // save thee auth token for local storage 
      localStorage.setItem("token", json.authtoken);
      showAlert("success", "signup successfully")
      // redirect the usehistory hook
      navigate('/login')

    }
    else {
      showAlert("danger", "Plz enter the correct data")

    }
  }


  return (
    <div className={`container my-2 bg-${darkmode ? "dark" : "light"} text-${darkmode ? "light" : "dark"}`}>
      <div className='row p-3'>
        <h1 className='text-center p-4'>Registration!!</h1>
        <form onSubmit={onSubmit} className={`card p-3 col-md-6 mx-auto bg-${darkmode ? "dark" : "light"} text-${darkmode ? "light" : "dark"} border-${darkmode ? "light" : "dark"}`}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className={`form-control bg-${darkmode ? "dark" : "light"} text-${darkmode ? "light" : "dark"}`} id="name" name='name' onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className={`form-control bg-${darkmode ? "dark" : "light"} text-${darkmode ? "light" : "dark"}`} id="email" name='email' ia-describedby="emailHelp" onChange={onChange} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className={`form-control bg-${darkmode ? "dark" : "light"} text-${darkmode ? "light" : "dark"}`} id="password" name='password' onChange={onChange} />
          </div>
          <button type="submit" className={`btn bg-${darkmode ? "light" : "dark"} text-${darkmode ? "dark" : "light"}`}>Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
