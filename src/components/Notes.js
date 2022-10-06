import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NoteContext from '../context/NoteContext'
import Addnote from './Addnote'
import Noteitem from './Noteitem'

const Notes = (props) => {

  // use navigate
  let navigate = useNavigate();
  const context = useContext(NoteContext)
  const { notes, getNote, editNote, showAlert, darkmode } = context
  // useong the ref hook for modal button 
  const ref = useRef(null);
  const refclose = useRef(null);

  // useEffect of calll the fetchh te api
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNote();
    }
    else {
      navigate('/login')
    }
    // eslint-disable-next-line
  }, [])

  // form code 
  const [note, setNote] = useState({ _id: "", etitle: "", edescription: "", etag: "default" })

  // upadteNote usdate the notes
  const updateNote = (currentNote) => {
    setNote({ _id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    ref.current.click();
  }

  // updateClick
  const updateClick = () => {
    console.log('updated', note)
    editNote(note._id, note.etitle, note.edescription, note.etag)
    refclose.current.click()
    console.log(refclose)
    showAlert("success", "updated successfully",)

  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }


  return (
    <>
      <div className='container'>
        <Addnote showAlert={props.showAlert} />
        {/* modal */}
        <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className={`modal-header bg-${darkmode ? "dark" : "light"} text-${darkmode ? "light" : "dark"}`}>
                <h5 className={`modal-title `} id="exampleModalLabel">Edit Note</h5>
                <button type="button" className={`btn-close`} data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className={`modal-body bg-${darkmode ? "dark" : "light"} text-${darkmode ? "light" : "dark"}`}>
                {/* moadl form */}
                <form>
                  <div className="mb-3">
                    <label htmlFor="title" className={`form-label `}>Title</label>
                    <input type="text" className="form-control" id="etitle" name='etitle' onChange={onChange} value={note.etitle} minLength={3} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className={`form-label `}>Description</label>
                    <input type="text" className="form-control" id="edescription" name='edescription' onChange={onChange} value={note.edescription} minLength={5} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="tag" className={`form-label `}>tag</label>
                    <input type="text" className="form-control" id="etag" name='etag' onChange={onChange} value={note.etag} />
                  </div>
                </form>
              </div>
              <div className={`modal-footer bg-${darkmode?"dark":"light"}`}>
                <button type="button" ref={refclose} className="btn btn-secondary" data-bs-dismiss="modal" id='btn'>Close</button>
                <button disabled={note.etitle.length < 3 || note.edescription.length < 5} type="button" className="btn btn-secondary" onClick={updateClick}>Update Note</button>
              </div>
            </div>
          </div>
        </div>

        <h2 className='my-3'>Your Note</h2>
        <div className='mx-3'>
          {notes.length === 0 && "no notes are available add it"}
        </div>
        <div className='row'>
          {notes.map((note) => {
            return <Noteitem showAlert={props.showAlert} note={note} updateNote={updateNote} key={note._id} />
          })}
        </div>
      </div>
    </>
  )
}

export default Notes
