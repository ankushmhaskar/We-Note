import React, { useContext, useState } from 'react'
import NoteContext from '../context/NoteContext'

const Addnote = (props) => {
    const context = useContext(NoteContext)
    const { addNote, showAlert, darkmode } = context

    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const addClick = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
        showAlert("success", "Note added successfully")
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className='p-2'>
            <h2 className='my-3'>Add Note  </h2>
            <div className='container'>
                <form className={`form`}>
                    <div className={`mb-3  `}>
                        <label htmlFor="title" className={`form-label `}>Title</label>
                        <input type="text" className={`form-control bg-${darkmode ? "dark" : "light"} text-${!darkmode ? "dark" : "light"}`} id="title" name='title' value={note.title} onChange={onChange} minLength={3} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className={`form-control bg-${darkmode ? "dark" : "light"} text-${!darkmode ? "dark" : "light"}`} id="description" name='description' value={note.description} onChange={onChange} minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">tag</label>
                        <input type="text" className={`form-control bg-${darkmode ? "dark" : "light"} text-${!darkmode ? "dark" : "light"}`} id="tag" name='tag' value={note.tag} onChange={onChange} />
                    </div>
                    <button disabled={note.title.length < 3 || note.description.length < 5} type="submit" className={`btn bg-${darkmode ? "light" : "dark"} text-${darkmode ? "dark" : "light"} `} onClick={addClick}>Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default Addnote
