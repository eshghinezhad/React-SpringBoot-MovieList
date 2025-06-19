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
import About from './About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/form" element={<Form />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/calcbutton" element={<CalcButton />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>

      {/* <Header />
      <Counter/>
      <Calculator />
      <CalcButton />
      <Practice />
      <Footer/> */}
    </div>
  );
}

export default App;
