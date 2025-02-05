/* eslint-disable no-unused-vars */
import React from "react";
import NoteInput from "../component/NoteInput";
import { addNote } from "../utils";
import { useNavigate } from "react-router-dom";

function AddPage () {
    const navigate = useNavigate();
    function onAddNoteHandler(note){
        addNote(note);
        navigate('/');
    }

    return (
        <section>
            <h2>Tambah Note</h2>
            <NoteInput addNote= {onAddNoteHandler} />
        </section>
    )
}

export default AddPage;