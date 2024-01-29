import React from 'react'
import { useParams } from 'react-router-dom'

const Notes = ({notes}) => {
    const {id} = useParams()
    const currNote = notes.find(note => note.id === Number(id))
    console.log(currNote)
  return (
    <form id='note' className='p-3'>
      <label htmlFor="note" className="form-label">{currNote.title}</label>
      <textarea name="note" id="note" className='form-control'>{currNote.body}</textarea>
    </form>
  )
}

export default Notes