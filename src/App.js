import React from 'react';
import { Route } from 'react-router';
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
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
