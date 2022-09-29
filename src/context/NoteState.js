import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "63353f811122217ebc654d34",
            "user": "63345c78d6cba4920820a291",
            "title": "market",
            "description": "going the market and buy a shoes",
            "tag": "optional",
            "date": "2022-09-29T06:47:29.754Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)

    // add note
    const addNote = (title, description, tag) => {
        // api 
        const note = {
            "_id": "63353f811ddddddd122217ebc654d34",
            "user": "63345c78d6cba492ddfdfd0820a291",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-09-29T06:47:29.754Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }
    // delete note
    const deleteNote = (_id) => {
        console.log("deletd" + _id);
        const newNotes = notes.filter((note) => { return !note._id === _id })
        console.log(newNotes)
        setNotes(newNotes)
    }
    // edit note
    const editNote = () => {

    }

    return <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }} >{props.children}</NoteContext.Provider>
}
export default NoteState;