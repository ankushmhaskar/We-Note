import React, { useState } from 'react'

const Login = () => {
    const host = "http://localhost:5000"

    // onchange 
    const [data, setData] = useState({ email: "", password: "" })
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    // onsbmit data
    const onSubmit = async (e) => {
        e.preventDefault();
        // fetch the data call api
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POSt', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email:data.email, password:data.password }) // body data type must match "Content-Type" header
        });
        const json = await response.json();
        if(json.success){

        }
        else{
            alert('sorry')
        }
        console.log(json)
    }
    return (
        <>
            <div className='container my-2'>
                <div className='row p-3'>
                    <h1 className='text-center p-4'>Please Login!!</h1>
                    <form onSubmit={onSubmit} className='card p-3 col-md-6 mx-auto'>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name='email' value={data.email} aria-describedby="emailHelp" onChange={onChange} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name='password' value={data.password} onChange={onChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
