import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes,onDelete}){
    return(
        <div className="note-list">
            {notes.length === 0 ? (
                <h1>Tidak Ada List</h1>
            ) : (
                notes.map((note)=>(
                    <NoteItem
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    body={note.body}
                    createdAt={note.createdAt}
                    archived={note.archived}
                    onDelete={onDelete}
                    {...note}
                    />
                ))
            )}
        </div>
    );
}

export default NoteList;