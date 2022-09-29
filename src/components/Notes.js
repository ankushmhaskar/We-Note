import React, { useContext } from 'react'
import NoteContext from '../context/NoteContext'
import Addnote from './Addnote'
import Noteitem from './Noteitem'

const Notes = () => {
  const context = useContext(NoteContext)
  const { notes } = context
  return (
    <>
      <div className='conatiner'>
        <Addnote />
        <h2 className='my-3'>Your Note</h2>
        <div className='row'>
          {notes.map((note) => {
            return <Noteitem note={note} key={note._id} />
          })}
        </div>
      </div>
    </>
  )
}

export default Notes
