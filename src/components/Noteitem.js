import React, { useContext } from 'react'
import NoteContext from '../context/NoteContext';

const Noteitem = (props) => {
  const { note, updateNote } = props;
  const context = useContext(NoteContext)
  const { deleteNote, showAlert, darkmode } = context

  return (
    <>
      <div className="col-md-4 col-sm-6  my-3  ">
        <div className={`card border-${darkmode ? "light" : "dark"}  bg-${darkmode ? "dark" : "light"} text-${!darkmode ? "dark" : "light"}`}>
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{note.description}</h6>
            <p className="card-text">{note.tag}</p>
            <i className="fa-solid fa-trash-can mx-2"
              onClick={() => {
                deleteNote(note._id);
                showAlert("success", "deleted successfully ")
              }}></i>
            <i className="fa-regular fa-pen-to-square mx-2" onClick={() => { updateNote(note) }}></i>
          </div>
        </div>
      </div>

    </>
  )
}

export default Noteitem
