import React from 'react'
import { Link } from 'react-router-dom'

const Note = ({note}) => {
  return (
    <Link to={`/notes/${note.id}`} className="card text-decoration-none col-10 col-md-5 mx-auto g-4 shadow">
      <div className="card-body">
        <h2 className="card-title">{note.title}</h2>
        <p className="card-text text-truncate">{note.body}</p>
      </div>
    </Link>
  )
}

export default Note