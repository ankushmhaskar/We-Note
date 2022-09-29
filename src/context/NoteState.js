import React, {useState} from "react";
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
    return <NoteContext.Provider value={{notes,setNotes}} >{props.children}</NoteContext.Provider>
}
export default NoteState;