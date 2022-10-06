import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import NoteContext from '../context/NoteContext';


const Login = (props) => {
    const context = useContext(NoteContext)
    const { showAlert, darkmode } = context;
    const navigate = useNavigate();
    // const host = "http://localhost:5000"

    // onchange 
    const [data, setData] = useState({ email: "", password: "" })
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    // onsbmit data
    const onSubmit = async (e) => {
        console.log(data)
        e.preventDefault();
        // fetch the data call api
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: data.email, password: data.password }) // body data type must match "Content-Type" header
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            // save thee auth token for local storage 
            localStorage.setItem("token", json.authToken);
            // console.log(localStorage.getItem('token'))
            showAlert("success", "Login successfully");
            // redirect the usehistory hook
            navigate("/")
        }
        else {
            showAlert("danger", "invalid data")
        }
    }
    return (
        <>
            <div className={`container my-2 bg-${darkmode ? "dark" : "light"} text-${darkmode ? "light" : "dark"}`}>
                <div className='row p-3'>
                    <h1 className='text-center p-4'>Please Login!!</h1>
                    <form onSubmit={onSubmit} className={`card p-3 col-md-6 mx-auto bg-${darkmode ? "dark" : "light"} border-${darkmode ? "light" : "dark"}`}>
                        <div className={`mb-3 `}>
                            <label htmlFor="email" className={`form-label `}>Email address</label>
                            <input type="email" className={`form-control bg-${darkmode ? "dark" : "light"} text-${darkmode ? "light" : "dark"}`} id="email" name='email' value={data.email} aria-describedby="emailHelp" onChange={onChange} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className={`form-label `}>Password</label>
                            <input type="password" className={`form-control bg-${darkmode ? "dark" : "light"} text-${darkmode ? "light" : "dark"}`} id="password" name='password' value={data.password} onChange={onChange} autoComplete="on" />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
