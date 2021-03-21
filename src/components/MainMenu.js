import React from 'react'
import "../style/mainmenu.css"

export default function MainMenu({id, title, content, deleteCurrentTask}) {

    
    return (
        <div className="main-menu">
           <button onClick={() => deleteCurrentTask(id)}>delete</button>
           <button>edit</button>
           <p id="main-time"> 7 march 2021, 8:20 PM </p>
           <h2 id="main-title">{title}</h2> 
           <p id="main-content">
               {content}
           </p>
           

        </div>
    )
}
