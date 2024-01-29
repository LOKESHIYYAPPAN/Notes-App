import React from 'react'
import Note from './Note'

const Main = ({notes}) => {
  return (
    <main>
        <div className="row">
            {notes.map(note => (
                <Note 
                  note={note} 
                  key={note.id}
                />
            ))}
            <button className="btn btn-outline-success rounded-pill position-fixed end-0 bottom-0 m-3">New +</button>
        </div>
    </main>
  )
}

export default Main