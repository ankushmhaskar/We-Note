import React, { useContext } from 'react'
import NoteContext from '../context/NoteContext'

const Alert = () => {
  const context = useContext(NoteContext);
  const { alert } = context;
  return (
    <div className={`alert mb-0 alert-${alert.type}`} role="alert">
      {alert.message}
    </div>


  )
}

export default Alert
