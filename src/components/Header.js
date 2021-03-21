import React,{useState, useEffect} from 'react';
import Delete from "../icons/delete.png"
import Notes from "../icons/notes.png"
import Search from "../icons/search.png"
import "../style/header.css"


export default function Header({promptAdd, deleteCurrentTask}) {
  
    return (
        <div className="header">
           <div className="img-container">
                <img src={Delete} alt="delete-icon" onClick={deleteCurrentTask}></img>
                <img src={Notes} alt="note-icon" onClick={promptAdd}></img>
           </div>
           <div className="brand-container"><h3>Task Tracker</h3></div>
           <div className="search-container">
             <img src={Search} alt="search-icon"/> 
             <input placeholder="search.."/>
           </div>
        </div>
    )
}
