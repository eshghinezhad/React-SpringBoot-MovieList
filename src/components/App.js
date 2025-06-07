import React from 'react';
import '../css/App.css';
import Header from './Header';
import Search from './Search';
import Form from './Form';
import Counter from './Counter';
import Calculator from './Calculator';
import CalcButton from './CalcButton';
import Practice from   './Practice';
import Footer from './Footer';



const App = () => {
  return (
    <div className="App">
      <Header />
      <Search />
      <Form />
      <Counter/>
      <Calculator />
      <CalcButton />
      <Practice />
      <Footer/>
    </div>
  );
}

export default App;
