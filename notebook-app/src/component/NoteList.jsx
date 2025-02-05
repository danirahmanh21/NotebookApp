/* eslint-disable no-unused-vars */
import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

function NoteList({notes,onDelete,onArchive}){
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
                    onArchive={onArchive}
                    {...note}
                    />
                ))
            )}
        </div>
    );
}

NoteList.propTypes = {
    notes : PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete : PropTypes.func.isRequired,
    onArchive : PropTypes.func,
}


export default NoteList;