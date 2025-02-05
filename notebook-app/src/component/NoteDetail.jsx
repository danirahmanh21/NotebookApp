/* eslint-disable no-unused-vars */
import React from "react";
import NoteItemContainer from "./NoteItemContainer";
import ArchivedButton from "./ArchivedButton";
import DeleteButton from "./DeleteButton";
import PropTypes from "prop-types";


function NoteDetail({id,title,body,createdAt,archived,onArchiveHandler,onDelete}){
    return (
        <div className="note-item">
            <NoteItemContainer title={title} body={body} createdAt={createdAt} />
            <p>Status : {archived ? 'Archived' : 'Active'} </p>
            <div className="note-detail__actions">
                <ArchivedButton id={id} onArchive={onArchiveHandler}/>
                <DeleteButton id={id} onDelete={onDelete} />
            </div>
        </div>
    );
}

NoteDetail.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
    archived: PropTypes.bool,
    onArchiveHandler: PropTypes.func,
    onDelete: PropTypes.func,
}

export default NoteDetail;