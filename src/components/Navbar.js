import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import NoteContext from '../context/NoteContext';
const Navbar = () => {
    const context = useContext(NoteContext)
    const { showAlert, mode, darkmode } = context;
    let location = useLocation();
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        showAlert("success", "logout successfully")
        navigate("/login")

        console.log(localStorage.getItem("token"));
    }

    // dark mode concepts
    // const [modeText, setModeText] = useState('Light mode')
    const setMode = () => {
        mode();
    }
    return (
        <div>
            <nav className={`navbar navigation bg-${darkmode ? "dark" : "light"} navbar-expand-lg`}>
                <div className="container-fluid">
                    <Link className={`navbar-brand fw-bold active text-${darkmode ? "light" : "dark"}`} to="#">WeNote</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link active ${location.pathname === '/' ? "fw-bold" : ""} text-${darkmode ? "light" : "dark"}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link active  ${location.pathname === '/about' ? "fw-bold" : ""} text-${darkmode ? "light" : "dark"}`} to="/about">About</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token') ? <form className="d-flex" role="search">
                            <Link className={`btn active mx-2 bg-${darkmode ? "light" : "dark"} text-${darkmode ? "dark" : "light"} `} to={'/login'} type="submit">Login</Link>
                            <Link className={`btn active bg-${darkmode ? "light" : "dark"} text-${darkmode ? "dark" : "light"} mx-2 `} to={'/signup'} type="submit">Sign up</Link>
                        </form> : <button className={`btn active bg-${darkmode ? "light" : "dark"} text-${darkmode ? "dark" : "light"} mx-2 `} onClick={handleLogout}>Logout</button>}
                        {/* darkmode button */}
                        <div className="form-check form-switch mx-2 my-md-2">
                            <input className="form-check-input" type="checkbox" role="switch" id="setModes" onClick={setMode} />
                            <label className="form-check-label" htmlFor="setmodes">Daekmode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
