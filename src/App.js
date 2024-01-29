import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import {Link, Route, Routes} from "react-router-dom"
import Notes from './Notes';

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "First Note",
      body: "First This class applies the transformations translateX(-50%) and translateY(-50%) to the element which, in combination with the edge positioning utilities, allows you to absolute center an element."
    },
    {
      id: 2,
      title: "Second Note",
      body: "Second This class applies the transformation sapplies the transformations translateX(-50%) and translateY(-50%) to the element which, in combination with the edge positioning utilities, allows you to absolute center an element."
    },
    {
      id: 3,
      title: "Third Note",
      body: "Third This class applies the applies the transformations translateX(-50%) and translateY(-50%) to the element which, in combination with the edge positioning utilities, allows you to absolute center an element."
    },
    {
      id: 4,
      title: "Fourth Note",
      body: "Fourth This class  transformations translateX(-50%) and translateY(-50%) to the element which, and translateY(-50%) to the element which, in combination with the edge positioning utilities, allows you to absolute center an element."
    }
  ])

  const handleDelete = (id) =>{

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
            />
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
