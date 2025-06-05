import React from 'react';
import '../css/App.css';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import Form from './Form';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Search />
      <Form />
      <Footer/>
    </div>
  );
}

export default App;
