import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import ToggleButton from './components/Navbar/ToggleButton';
import './App.scss';

function App() {
    return (
        <div className="App">
            <section>
                <ToggleButton />
                <Navbar />
                <Header />
            </section>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
