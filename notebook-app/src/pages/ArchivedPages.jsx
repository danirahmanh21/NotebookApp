/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { deleteNote, getAllNotes, unArchiveNote } from "../utils";
import NoteList from "../component/NoteList";
import PropTypes from "prop-types";

class ArchivedPages extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: getAllNotes().filter((note) => note.archived),
        };
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    }

    onDeleteHandler(id){
        deleteNote(id);
        this.setState(()=>{
            return {
                notes : getAllNotes().filter((note) => note.archived),
            };
        });
    }

    onUnarchiveHandler(id){
        unArchiveNote(id);
        this.setState(()=>{
            return{
                notes : getAllNotes().filter((note) => note.archived),
            };
        });
    }
    render() {
        return (
            <section>
                <h2>Archived Notes</h2>
                {this.state.notes.length === 0 ? (
                    <p>No Archived Notes</p>
                ): (
                    <NoteList
                        notes={this.state.notes}
                        onDelete={this.onDeleteHandler}
                        onArchive={this.onUnarchiveHandler}
                    />
                )}
            </section>
        );
    }
}
ArchivedPages.propTypes = {
    notes: PropTypes.array,
};

export default ArchivedPages;