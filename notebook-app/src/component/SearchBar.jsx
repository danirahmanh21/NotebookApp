/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import React from "react";

function SearchBar({keyword, keywordChange}){
    return(
        <div className="search-bar">
            <input 
                type="text"
                placeholder="Cari Bedasarkan Judul"
                value={keyword}
                onChange={(e) => keywordChange(e.target.value)} 
                />
        </div>
        
    )


    /*const SeacrhHandle = (e)=>{
        onSearch(e.target.value);
    };
    return(
        <div className="search-bar">
            <input type="text" placeholder="Cari" onChange={SeacrhHandle}/>
        </div>
    );*/
}

SearchBar.propTypes = {
    keyword : PropTypes.string.isRequired,
    keywordChange : PropTypes.func.isRequired,
}

export default SearchBar;