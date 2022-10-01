import React from 'react'
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
    let location = useLocation();
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold active" to="#">WeNote</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link active ${location.pathname === '/' ? "fw-bold" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link active  ${location.pathname === '/about' ? "fw-bold" : ""}`} to="/about">About</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <Link className="btn btn-success mx-2" to={'/login'} type="submit">Login</Link>
                            <Link className="btn btn-success" to={'/signup'} type="submit">Sign up</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
