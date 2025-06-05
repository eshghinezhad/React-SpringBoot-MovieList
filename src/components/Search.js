import React from 'react'

const Search = () => {
  return (
    <div style={{ backgroundColor: '', padding:'30px' , textAlign: 'left' }}>
        <h1 className=""style={{  color: 'Black', textAlign:'center',marginTop:'0' }}>Welcome to Movie Application</h1>
        <form className="" style={{ }}>
            <h3>This is a React application to showcase movie listings.</h3>
            <label htmlFor="" className=""> Movies Title: </label>
            <input 
                type="text" 
                placeholder="Search for a movie..." 
                className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
 
    </div>
  )
}

export default Search
