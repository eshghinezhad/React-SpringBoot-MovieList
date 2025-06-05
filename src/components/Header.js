import React from "react";
import topLogo from "./../topLogo.png";
import './../css/Header.css';
 
const Header = () => {
  return (
    <header className="header">
     <nav className="" style={{  padding: '10px'}}>

            <p> 
                <img src={topLogo} className="topLogo" alt="Logo" />
                
                <a href="#" style={{  marginLeft: '60%', color: 'white',fontSize:'20px' }}>Home</a> | 
                <a href="#" style={{  marginLeft: '10px', color: 'white',fontSize:'20px'  }}>About</a> | 
                <a href="#" style={{  marginLeft: '10px', color: 'white',fontSize:'20px'  }}>Contact</a>

            </p>
      </nav>
 
    </header>
    // <header className="App-header">
       
    //     <img src={topLogo} className="topLogo" alt="topLogo" />
 
                   
    // </header>
    
  );
}
export default Header;