/* eslint-disable react/prop-types */
import React from "react";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";

class NoteInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
            body:'',
            remainingCharacters: 50,
        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
    onTitleChangeEventHandler(e){
        const inputTitle = e.target.value;
        if(inputTitle.length <= 50){
            this.setState({
                title: inputTitle,
                remainingCharacters: 50 - inputTitle.length,
            });
        }
    }
    onBodyChangeEventHandler(e){
        this.setState(()=>
        {
            return{
                body:e.target.value
            }
        });
    }
    onSubmitEventHandler(e) {
        e.preventDefault();

        const { id } = this.props.initialData || {}; 
        const newNote = {
            id: id || Date.now(),
            title: this.state.title,
            body: this.state.body,
            createdAt: id ? this.props.initialData.createdAt : showFormattedDate(new Date()),
            archived: id ? this.props.initialData.archived : false, 
        };

        this.props.addNote(newNote); 
        this.setState({
            title: '',
            body: '',
            remainingCharacters: 50,
        });
    }
    render() {
        return (
             <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <p>remainingCharacters: {this.state.remainingCharacters}</p>
                <input type="text" placeholder="Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <textarea type="body" placeholder="Isi" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                <button type="submit">Tambah</button>
             </form>
        );
    }
}

NoteInput.propType = {
    addNote : PropTypes.func.isRequired,
    initialData : PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        body: PropTypes.string,
        createdAt : PropTypes.string,
        archived: PropTypes.bool,
    })
}

export default NoteInput;