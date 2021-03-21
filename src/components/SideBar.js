import React from 'react'
import "../style/sidebar.css"
import Row from "./Row"

export default function SideBar({data}) {

    //data = data.length === 0 ? data : data[0];
    console.log(data);
    return (
        <div className="side-bar">
           {  
               data.map((todo, index) => {
                    //console.log(todo);
                    return <Row key={index} id={index} title={todo.title} content={todo.content}/>  
               })
           }
        </div>
    )
}
