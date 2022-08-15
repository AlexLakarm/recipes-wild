import {useState} from "react";
import './Header.css';



const SearchBar =({search, onChange})=> {
   

    return(
        <>
        <input className='search' value={search} onChange={(e)=>onChange(e.target.value)}/>
        </>
    )
}


export default SearchBar;