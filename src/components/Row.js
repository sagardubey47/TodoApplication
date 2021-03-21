import React from 'react'
import "../style/row.css"

export default function Row({id, title, content}) {
    return (
        <div className="row-container" key={id}>
            <h3>{title}</h3>
            <p><span id="time">2:00pm </span> <span id="content">{content}</span></p>
        </div>
    )
}
