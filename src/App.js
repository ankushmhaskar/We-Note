import './App.css';
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
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
      <BrowserRouter basename='/We-Note'> 
        <div className={`main bg-${darkmode ? "dark" : "light"} `}>
          <Router>
            <Navbar />
            <Alert />
            <Routes>
              <Route exact path="/We-Note" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
            </Routes>
          </Router>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
