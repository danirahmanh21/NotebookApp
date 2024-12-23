import React from "react";

function NoteItemContainer({title,body,createdAt}){
    return(
        <div className="note-item__container">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__body">{body}</p>
            <small className="note-item__date">{createdAt}</small>
        </div>
    )
}

export default NoteItemContainer;