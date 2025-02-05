/* eslint-disable no-unused-vars */

import PropTypes from "prop-types";
import React from "react";
import { FiDelete } from "react-icons/fi";

function DeleteButton({id,onDelete}){
    return <button className="note-item__delete" onClick={()=>onDelete(id)}><FiDelete /></button>
}

DeleteButton.propTypes = {
    id : PropTypes.string.isRequired,
    onDelete : PropTypes.func.isRequired,
}
export default DeleteButton;