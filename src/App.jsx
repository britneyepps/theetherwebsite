import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Space from './pages/Space';
import Community from './pages/Community';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import './styles/global.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/space" element={<Space />} />
          <Route path="/community" element={<Community />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/contact" element={<Contact />} />
          {/* …other routes */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
