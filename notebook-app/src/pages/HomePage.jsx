import React from "react";
import NoteList from "../component/NoteList";
import {archiveNote, deleteNote, getAllNotes, unArchiveNote } from "../utils";
import SearchBar from "../component/SearchBar";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";


function HomePageWrapper(){
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword){
        setSearchParams({keyword});
    }
    return <HomePage 
    defaultKeyword={keyword} 
    keywordChange={changeSearchParams}
    />
}

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes : getAllNotes(),
            keyword:props.defaultKeyword||"",
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onUnArchiveHandler = this.onUnArchiveHandler.bind(this);
    }

    onDeleteHandler(id){
        deleteNote(id);

        this.setState(() => {
            return{
                notes: getAllNotes(),
            };
        });
    }

    onArchiveHandler(id){
        archiveNote(id);
        this.setState(() => {
            return{
                notes: getAllNotes(),
            };
        });
    }

    onUnArchiveHandler(id){
        unArchiveNote(id);
        this.setState(() => {
            return {
                notes:getAllNotes(),
            };
        });
    }

    onKeywordChangeHandler(keyword){
        this.setState(() =>{
            return{
                keyword,

            }
        });
        this.props.keywordChange(keyword);
    }


    render() {
        const filteredNotes = this.state.notes
        .filter((note)=> !note.archived)
        .filter((note)=>note.title.toLocaleLowerCase().includes(this.state.keyword.toLocaleLowerCase()));
        return (
            <section>
                <h2>Cari Catatan</h2>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
                <h2>Note List</h2>
                <NoteList 
                    notes={filteredNotes} 
                    onDelete={this.onDeleteHandler} 
                    onArchive={this.onArchiveHandler}
                    onUnArchive={this.onUnArchiveHandler}
                />
            </section>
        )
    }
}
HomePage.propTypes = {
    defaultKeyword : PropTypes.string,
    keywordChange : PropTypes.func
}
export default HomePageWrapper