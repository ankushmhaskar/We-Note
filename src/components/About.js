import React,{useContext} from 'react'
import NoteContext from '../context/NoteContext'

const About = () => {
 const a = useContext(NoteContext)
  return (
    <div className='container'>
        <h1>hello hi {a.name}</h1>
    </div>
  )
}

export default About
