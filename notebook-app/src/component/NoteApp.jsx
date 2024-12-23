import React from "react";
import NoteInput from "./NoteInput";
import {getInitialData, showFormattedDate} from "../utils/index";
import NoteList from "./NoteList";
import SearchBar from "./SearchBar";

class NoteApp extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            notes : getInitialData(),
            searchQuery:"",
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchHandle = this.onSearchHandle.bind(this);
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    onAddNoteHandler({title,body}){
        const currentDate = showFormattedDate(new Date());
        this.setState((prevState)=>{
            return{
                notes:[
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: currentDate,
                        archived: false,
                    }
                ]
            }
        });
    }

    onSearchHandle(query){
        this.setState({searchQuery: query});
    }
    
    render(){
        const filteredNotes = this.state.notes.filter((note)=>note.title.toLocaleLowerCase().includes(this.state.searchQuery.toLocaleLowerCase()));
        return(
            <div className="note-app">
                <div className="note-app-header">
                <h1>Aplikasi Catatan</h1>
                <h2>Tambah Catatan</h2>
                <NoteInput addNote={this.onAddNoteHandler}/>
                <h2>Cari Catatan</h2>
                <SearchBar onSearch={this.onSearchHandle}/>
                <h2>Daftar Catatan</h2>
                <NoteList notes={filteredNotes} onDelete={this.onDeleteHandler}/>
                </div>
            </div>
        )
    }

}

export default NoteApp;
