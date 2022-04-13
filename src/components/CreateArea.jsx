import React, { useState } from "react";

function CreateArea(props) {
    const [inputTitle, setTitle] = useState("");
    const [inputNote, setNote] = useState("");

    function titleChange(event){
        const newTitle = event.target.value;
        setTitle(newTitle);
    };
    function noteChange(event){
        const newNote = event.target.value;
        setNote(newNote);
    };

  return (
    <div>
      <form 
      onSubmit={(event)=>
        {event.preventDefault();
          props.onAdd(inputNote, inputTitle);
          
          
          
          
        }}>
        <input name="title" 
            placeholder="Title" 
            value = {inputTitle}
            onChange={titleChange}

        />
        <textarea name="content"
            placeholder="Take a note..." 
            rows="3" 
            value={inputNote}
            onChange={noteChange}

         />
        <button type="submit"
        onClick={()=>{
          
        }}
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea
 
