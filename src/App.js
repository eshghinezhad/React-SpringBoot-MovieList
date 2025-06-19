import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../css/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Login from '../pages/Login';

import Header from './components/Header';
// import Search from './Search';
// import Form from './Form';
// import Counter from './Counter';
// import Calculator from './Calculator';
// import CalcButton from './CalcButton';
// import Practice from   './Practice';
import Footer from './components/Footer';



const App = () => {
  return (
    <div className="App">
      <Router>

        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/register" element={<Register />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
