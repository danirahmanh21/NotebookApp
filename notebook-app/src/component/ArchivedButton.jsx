/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import React from "react";
import { FiArchive } from "react-icons/fi";

function ArchivedButton ({id,onArchive}) {
    return (
            <button className="note-item__archive" onClick={() => onArchive(id)}><FiArchive /></button>
        );
}

ArchivedButton.propTypes = {
    id : PropTypes.string.isRequired,
    onArchive : PropTypes.func,
}

export default ArchivedButton;