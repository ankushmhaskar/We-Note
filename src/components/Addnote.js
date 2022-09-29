import React, { useContext, useState } from 'react'
import NoteContext from '../context/NoteContext'

const Addnote = () => {
    const context = useContext(NoteContext)
    const { addNote } = context
    
    const [note, setNote] = useState({ title: "", description: "", tag: "default" })
    const addClick = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag);
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <h2 className='my-3'>Add Note  </h2>
            <div className='container'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name='title' onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name='description' onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">tag</label>
                        <input type="text" className="form-control" id="tag" name='tag' onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={addClick}>Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default Addnote
