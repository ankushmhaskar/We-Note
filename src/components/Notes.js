import React, { useContext } from 'react'
import NoteContext from '../context/NoteContext'
import Noteitem from './Noteitem'

const Notes = () => {
  const context = useContext(NoteContext)
  const { notes } = context
  return (
    <div className='conatiner'>
      <h2 className='my-3'>Your Note</h2>
      {notes.map((note) => {
        return <Noteitem note={note} key={note._id} />
      })}
    </div>

  )
}

export default Notes
