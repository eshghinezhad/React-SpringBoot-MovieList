import React from 'react'

const Search = () => {
  return (
    <div>
        <h1 className=""style={{  color: 'white' }}>Welcome to Movie Application</h1>
        <form className="search-form">
            <input 
                type="text" 
                placeholder="Search for a movie..." 
                className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
    </div>
  )
}

export default Search
