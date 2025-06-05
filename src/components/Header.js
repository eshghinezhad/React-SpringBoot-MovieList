import React from "react";
import topLogo from "./../topLogo.png";
import './../css/Header.css';
 
const Header = () => {
  return (
    <header className="header">
     <nav className="mt-2">
        {/* <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul> */}
            <p> 
                <img src={topLogo} className="topLogo" alt="Logo" />
                
                <a href="#" style={{  marginLeft: '30%', color: 'white' }}>Home</a> | 
                <a href="#" style={{  marginLeft: '10px', color: 'white' }}>About</a> | 
                <a href="#" style={{  marginLeft: '10px', color: 'white' }}>Contact</a>

            </p>
      </nav>
 
    </header>
    // <header className="App-header">
       
    //     <img src={topLogo} className="topLogo" alt="topLogo" />
    //     <p>
    //       This is a simple React application to showcase movie listings.
    //     </p>
                   
    // </header>
    
  );
}
export default Header;