import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');

  const handlePageClick = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="pink-background flex">
      <section className='w-full md:w-1/4 shadow-md mt-1 md:mt h-full'>
        
        <div className='text-blue-500 text-lg font-bold mt- bg-green-200 p-4 mb-3'>Uwimana Alice</div>
        
        <Router>
          <nav>
            <ul className='flex flex-col mt-8'>
              <li>
                <Link to="/" onClick={() => handlePageClick('home')} className="page-link">Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => handlePageClick('about')} className="page-link" >About me</Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => handlePageClick('contact')} className="page-link">Contact</Link>
              </li>
            </ul>
          </nav>
        </Router>
      </section>
      <section className='flex-1 bg-yellow-200 shadow-md p-4'>
        {selectedPage === 'home' && <Home />}
        {selectedPage === 'about' && <About />}
        {selectedPage === 'contact' && <Contact />}
      </section>
    </div>
  );
}

export default App;
