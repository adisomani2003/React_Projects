import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



function App(){
    const [notes, setNotes] = useState([]);
    const [titles, setTitles] = useState([]);
    function addNote(inputNote, inputTitle, event){
        setNotes(prevItems => [...prevItems, inputNote]);
        setTitles(prevItems => [...prevItems, inputTitle]);
        
        event.preventDefault();
    }
    function deleteNote(id) {
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        });
        
      });
      setTitles(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        });
        
      });
    }


    return (
        <div>
          <Header />
          <CreateArea
            onAdd = {addNote}
            />
            
          <Footer />
          {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title = {titles[index]}
            content = {notes[index]}
            onDelete={deleteNote}
          />
        );
      })}
        </div>
      );
    }
export default App