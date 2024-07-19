import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';
import StaffList from './components/StaffList';
// import ChatBot from "react-chatbotify";
import Us from './pages/Dream';

function App() {
    
    return (
        <Router>
            <div >
               
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/properties" element={<Properties />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/us" element={<Us/>} />
                    <Route path="/staff" element={<StaffList />} /> {/* Add Route for StaffList */}
                </Routes>
                <Footer />
                
            </div>
        </Router>
    );
}

export default App;
