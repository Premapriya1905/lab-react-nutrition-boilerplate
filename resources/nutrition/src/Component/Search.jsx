import React from "react";

function Search(props){
    let {setSearch}=props;
    return (
        <>
            {/* <h1>Search Anything here...</h1> */}
            <input type="text" 
            placeholder="" 
            onChange={(e)=>{setSearch(e.target.value)}} />
        </>
    )
}
export default Search;