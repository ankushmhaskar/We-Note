import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    // get all notes
    const getNote = async () => {
        // api 
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzNDVjNzhkNmNiYTQ5MjA4MjBhMjkxIn0sImlhdCI6MTY2NDQyNjk0N30.OzGWnevVbJp2JmjqqoovkvE6h1eA_IpdidwwRKZYzeY'
            },
        });
        const json = await response.json();
        console.log(json)
        setNotes(json)
    }
    // add note
    const addNote = async (title, description, tag) => {
        // api 
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzNDVjNzhkNmNiYTQ5MjA4MjBhMjkxIn0sImlhdCI6MTY2NDQyNjk0N30.OzGWnevVbJp2JmjqqoovkvE6h1eA_IpdidwwRKZYzeY'
            },
            body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
        });
        const note = await response.json();
        setNotes(notes.concat(note))
    }
    // delete note
    const deleteNote = async (_id) => {
        // call api
        const response = await fetch(`${host}/api/notes/deletenote/${_id}`, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzNDVjNzhkNmNiYTQ5MjA4MjBhMjkxIn0sImlhdCI6MTY2NDQyNjk0N30.OzGWnevVbJp2JmjqqoovkvE6h1eA_IpdidwwRKZYzeY'
            },
            body: JSON.stringify() // body data type must match "Content-Type" header
        });

        const json = await response.json();
        console.log(json)
        const newNotes = notes.filter((note) => { return note._id !== _id })
        setNotes(newNotes)
    }





    // edit note
    const editNote = async (_id, title, description, tag,) => {
        // CALL THE API
        const response = await fetch(`${host}/api/notes/updatenote/${_id}`, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzNDVjNzhkNmNiYTQ5MjA4MjBhMjkxIn0sImlhdCI6MTY2NDQyNjk0N30.OzGWnevVbJp2JmjqqoovkvE6h1eA_IpdidwwRKZYzeY'
            },
            body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
        });
        const json = await response.json();
        console.log(json)
        // create a new notes for upadte and use the setnotes useState 
        let newNotes = JSON.parse(JSON.stringify(notes));
        // logic of client edit
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === _id) {
                newNotes[index] = title
                newNotes[index] = description
                newNotes[index] = tag
                break;
            }
            setNotes(newNotes)

        }
    }

    return <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNote }} >{props.children}</NoteContext.Provider>
}
export default NoteState;