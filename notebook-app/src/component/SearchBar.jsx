import React from "react";

function SearchBar({onSearch}){
    const SeacrhHandle = (e)=>{
        onSearch(e.target.value);
    };
    return(
        <div className="search-bar">
            <input type="text" placeholder="Cari" onChange={SeacrhHandle}/>
        </div>
    );
}

export default SearchBar;