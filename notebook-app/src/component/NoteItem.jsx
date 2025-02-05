/* eslint-disable no-unused-vars */
import React from "react";
import NoteItemContainer from "./NoteItemContainer";
import DeleteButton from "./DeleteButton";
import PropTypes from "prop-types";
import ArchivedButton from "./ArchivedButton";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa6";

function NoteItem({title,body,createdAt,id,onDelete,onArchive}){
    
    return(
        <div className="note-item">
            <NoteItemContainer title = {title} body={body} createdAt={createdAt}/>
            <div className="note-detail__actions">
            <DeleteButton id={id} onDelete={onDelete}/>
            <ArchivedButton id={id} onArchive={onArchive}/>
            <Link to={`/notes/${id}`} className="btn btn-primary"><FaBook /></Link>
            </div>
        </div>
    )
}

NoteItem.propTypes = {
    title : PropTypes.string.isRequired,
    body : PropTypes.string.isRequired,
    createdAt : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired,
    onDelete : PropTypes.func.isRequired,
    onArchive : PropTypes.func,
};


export default NoteItem;