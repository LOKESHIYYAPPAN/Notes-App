import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom"
import Notes from './Notes';
import NewNote from './NewNote';

function App() {
  const [notes, setNotes] = useState([])
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')

  const [newTitle, setNewTitle] = useState('')
  const [newBody, setNewBody] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem("notes")) || [])
  },[])

  const handleEdit = (id) => {
    const edited = {id, title:editTitle, body: editBody}
    const newNotes = notes.map(note => note.id === id ? edited : note)
    setNotes(newNotes)
    localStorage.setItem("notes",JSON.stringify(newNotes))
    setTimeout(() => {
      navigate("/")
    }, 0);
  }

  const handleAddNew = () =>{
    const id = notes.length ? notes.length + 1 : 1
    const newN = {id, title: newTitle, body: newBody}
    const newNotes = [...notes, newN]
    setNotes(newNotes)
    localStorage.setItem("notes",JSON.stringify(newNotes))
    setNewTitle('')
    setNewBody('')
    setTimeout(() => {
      navigate("/")
    }, 0);
  }
  
  const handleDelete = (id) =>{
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
    localStorage.setItem("notes",JSON.stringify(newNotes))
  }

  return (
    <div className="App">
      <Header title="Notes App"/>
      <div className="container ">
        <Routes>
          <Route path='/' element={
            <Main 
              notes={notes}
            />
          } />
          <Route path='/notes/:id' element={
            <Notes 
              notes={notes}
              handleEdit={handleEdit}
              editTitle={editTitle}
              handleDelete={handleDelete}
              setEditTitle={setEditTitle}
              editBody={editBody}
              setEditBody={setEditBody}
            />
          } />
          <Route path='/newnote' element={
            <NewNote 
              newTitle={newTitle}
              setNewTitle={setNewTitle}
              newBody={newBody}
              setNewBody={setNewBody}
              handleAddNew={handleAddNew}
            />
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
