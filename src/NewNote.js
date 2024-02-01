import React from 'react'
import { useNavigate } from 'react-router-dom'

const NewNote = ({newTitle, setNewTitle, newBody, setNewBody, handleAddNew}) => {
  return (
    <form className="d-flex flex-column note" onSubmit={e => e.preventDefault() }>
      <input 
          type="text" 
          className='form-control rounded-bottom-0 text-center'
          value={newTitle}
          required
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder='Title Here'
      />
      <textarea 
          className="form-control rounded-top-0"
          required
          value={newBody}
          onChange={e => setNewBody(e.target.value)}
          placeholder='Notes Here'
      ></textarea>
      <button type="submit" className="btn btn-success" onClick={() => handleAddNew()}>Add Note</button>
    </form>
  )
}

export default NewNote