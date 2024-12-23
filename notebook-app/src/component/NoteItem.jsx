import React from "react";
import NoteItemContainer from "./NoteItemContainer";
import DeleteButton from "./DeleteButton";

function NoteItem({title,body,createdAt,id,onDelete}){
    return(
        <div className="note-item">
            <NoteItemContainer title = {title} body={body} createdAt={createdAt}/>
            <DeleteButton id={id} onDelete={onDelete}/>
        </div>
    )
}

export default NoteItem;