import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Privacy from './components/Privacy';
import Repo from './components/Repo';
import Hero from './components/Hero';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <>
     <Router>
      <Navbar />
        <Routes>
       <Route exact path='/' element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/repo" element={<Repo />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
