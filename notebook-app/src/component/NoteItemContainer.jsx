/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
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

NoteItemContainer.propTypes = {
    title : PropTypes.string.isRequired,
    body : PropTypes.string.isRequired,
    createdAt : PropTypes.string.isRequired,
}
export default NoteItemContainer;