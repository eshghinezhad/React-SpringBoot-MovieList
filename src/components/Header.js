import React from "react";
import topLogo from "./../topLogo.png";

 
const Header = () => {
  return (
    // <header className="bg-gray-800 text-white p-4">
    //   <h1 className="text-2xl font-bold">My Application</h1>
    //   <nav className="mt-2">
    //     <ul className="flex space-x-4">
    //       <li><a href="/" className="hover:underline">Home</a></li>
    //       <li><a href="/about" className="hover:underline">About</a></li>
    //       <li><a href="/contact" className="hover:underline">Contact</a></li>
    //     </ul>
    //   </nav>
    // </header>
    <header className="App-header">
        <p>
          Welcome to Movie.ca!
        </p>
        <img src={topLogo} className="" alt="topLogo" />
        <p>
          This is a simple React application to showcase movie listings.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione quae eos enim ut porro, nobis, sequi culpa aliquid commodi dolor voluptatem? Consectetur, deserunt odit aliquam cum porro quasi ad?
        </p>
           
    </header>
    
  );
}
export default Header;