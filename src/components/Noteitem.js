import React from 'react'

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div>
      <div className='row'></div>
      <div className="col-md-3 card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{note.description}</h6>
          <p className="card-text">{note.tag}</p>
          <i className="fa-solid fa-trash-can mx-2"></i>
          <i className="fa-regular fa-pen-to-square mx-2"></i>
        </div>
      </div>
    </div>
  )
}

export default Noteitem
