import React from 'react'

const SearchBar = ({countries, onInputChange}) => {
    return (
        <div className="search_bar">
            <span className="found">Found {countries.length} countries</span>
            <input onChange={(e) => onInputChange(e)} className="search_input" type="text" placeholder="Search by name or region"/>
        </div>
    )
}

export default SearchBar;
