import React from 'react'
import Note from './Note'
import { Link } from 'react-router-dom'

const Main = ({notes}) => {
  return (
    <main className='d-flex flex-column justify-content-center py-3'>
      {
        notes.length > 0 && (
          <div className="row">
            {notes.map(note => (
                  <Note 
                    note={note} 
                    key={note.id}
                  />
              ))}
          </div>
        )
      }
      {
        !notes.length > 0 && <p className='mx-auto'>Create a Note</p>
      }
      <Link to='/newnote'>
        <button className="btn btn-outline-success rounded-pill position-fixed end-0 bottom-0 m-3">New +</button>
      </Link>
    </main>
  )
}

export default Main