import React, { useContext } from 'react'
import NoteContext from '../context/NoteContext'
import Notes from './Notes'


const Home = (props) => {
    const context = useContext(NoteContext)
    const { darkmode } = context;
    // const { showAlert } = props
    return (
        <div className={`container text-${darkmode ? "light" : "dark"} bg-${darkmode ? "dark" : "light"}`}>
            <Notes />
        </div>
    )
}

export default Home
