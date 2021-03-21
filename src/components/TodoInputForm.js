import React,{useState} from 'react'
import "../style/todoInputForm.css"

export default function TodoInputForm({addTask}) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
         e.preventDefault();
         
         addTask(title, content);
         setTitle("");
         setContent("");
    }

    return (
       <form className="input-form" onSubmit={handleSubmit}>
           <div id="input-row1">
           <label>Title:</label>
           <input value={title} onChange={(e) => {setTitle(e.target.value)}}/>
           </div>
           
            <div id="input-row2">
           <label>Content:</label>
           <textarea rows="5" cols="20" value={ content} onChange={(e) => {setContent(e.target.value)}}/>
           </div>
           <button type=" submit">add</button>
       </form>
    )
}
