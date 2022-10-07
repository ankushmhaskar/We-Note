import './App.css';
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';
import NoteContext from './context/NoteContext';




function App() {
  const context = useContext(NoteContext);
  const { darkmode } = context;

  return (
    <>
      <div className={`main bg-${darkmode ? "dark" : "light"} `}>
        
          <Router>
            <Navbar />
            <Alert />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
            </Routes>

          </Router>
        
      </div>
    </>
  );
}

export default App;
