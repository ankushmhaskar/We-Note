import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)
    // alert concepts
    const [alert, setAlert] = useState({ type: "", message: "" })

    // trigering the alert 
    const showAlert = (type, message) => {
        setAlert({
            "type": type,
            "message": message
        })
        setTimeout(() => {
            setAlert({ type: "", message: "" })
        }, 1500);
    }

    // darkmode concepts
    const [darkmode, setDarkmode] = useState(false)
    const mode = () => {
        setDarkmode(!darkmode);
    }

    // get all notes
    const getNote = async () => {
        console.log("This is auth-toekn");
        console.log(localStorage.getItem('token'))
        // api 
        try {
            const response = await fetch("http://localhost:5000/api/notes/fetchallnotes", {
                method: 'GET',
                headers: {
                    // "auth-token": localStorage.getItem('token')
                    "auth-token": localStorage.getItem('token')
                }
            });
            const json = await response.json();
            setNotes(json)
        } catch (error) {
            console.log(error.message);
        }
    }
    // add note
    const addNote = async (title, description, tag) => {
        // api 
        try {
            const response = await fetch(`${host}/api/notes/addnote`, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
            });
            const note = await response.json();
            setNotes(notes.concat(note))
        } catch (error) {
            console.log(error.message)
        }
    }
    // delete note
    const deleteNote = async (_id) => {
        // call api
        try {
            const response = await fetch(`${host}/api/notes/deletenote/${_id}`, {
                method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify() // body data type must match "Content-Type" header
            });

            const json = await response.json();
            console.log(json)
            const newNotes = notes.filter((note) => { return note._id !== _id })
            setNotes(newNotes)
        } catch (error) {
            console.log(error.message)

        }
    }

    // edit note
    const editNote = async (_id, title, description, tag) => {
        // CALL THE API
        const response = await fetch(`${host}/api/notes/updatenote/${_id}`, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
        });
        const json = await response.json();
        console.log(json);
        // create a new notes for upadte and use the setnotes useState 
        let newNotes = JSON.parse(JSON.stringify(notes));
        // logic of client edit
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === _id) {
                newNotes[index].title = title
                newNotes[index].description = description
                newNotes[index].tag = tag
                break;
            }
            setNotes(newNotes)

        }
    }

    return <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNote, showAlert, alert, mode, darkmode }} >{props.children}</NoteContext.Provider>
}
export default NoteState;