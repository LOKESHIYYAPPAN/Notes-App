import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Notes = ({notes, handleEdit, editBody, setEditBody,editTitle, setEditTitle, handleDelete}) => {
  const {id} = useParams()
  const currNote = notes.find(note => note.id === Number(id))
  useEffect(() => {
    setEditBody(currNote.body)
    setEditTitle(currNote.title)
  },[currNote])
  const navigate = useNavigate()

  return (
    <form className="d-flex flex-column note py-2" onSubmit={e => e.preventDefault() }>
      <input 
        type="text" 
        className="form-control rounded-bottom-0 text-center"
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
      />
      <textarea 
        name="note"
        id="note"
        className='form-control rounded-top-0'
        value={editBody}
        onChange={(e) => setEditBody(e.target.value)}
      >
      </textarea>
      <div className='d-flex mt-2'>
        <button 
          type="submit" 
          className="btn btn-success mx-auto "
          onClick={() => handleEdit(currNote.id)}
        >
          Submit
        </button>
        <button
          className='btn btn-danger mx-auto'
          type='button'
          onClick={() => {
            handleDelete(currNote.id)
            navigate('/')
          }}
        >
          Delete
        </button>
      </div>
    </form>
  )
}

export default Notes