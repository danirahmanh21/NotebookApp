import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { archiveNote, deleteNote, getNote, unArchiveNote } from "../utils";
import NoteDetail from "../component/NoteDetail";
import PropTypes from "prop-types";


function DetailPageWrapper() {
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const note = getNote(id);
        if(!note) {
            navigate("/404",{replace: true});
        }
    }, [id,navigate]);

    const note = getNote(id);
    if(!note) {
        return null;
    }

    return <DetailPage id={id} />;
}

class DetailPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            note: getNote(props.id),
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
    }
    onDeleteHandler(){
        deleteNote(this.state.note.id);

        this.setState(()=>{
            return {
                note: null,
            };
        });
    }

    onArchiveHandler(){
        const {note} = this.state;
        if(note.archived){
            unArchiveNote(note.id);
        }else{
            archiveNote(note.id);
        }

        this.setState(()=>{
            return{
                note: getNote(note.id),
            };
        });
    }
    render(){
        if(this.state.note === null){
            return <p>note not found</p>;
        }
        return(
            <section>
                <NoteDetail
                id={this.state.note.id}
                title={this.state.note.title}
                body={this.state.note.body}
                createdAt={this.state.note.createdAt}
                archived={this.state.note.archived}
                onArchiveHandler={this.onArchiveHandler}
                onDelete={this.onDeleteHandler}
                />
            </section>
        )
    }
}

DetailPage.propTypes = {
    id:PropTypes.string.isRequired,

} 
    
export default DetailPageWrapper;