import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';




const App = () => {
  return (
    <div className="App">
      <Router>

        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
