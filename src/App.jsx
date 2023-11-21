
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Founder from './pages/Founder';
import About from './pages/About'
import Home from './pages/Home';
import React from "react";
import Vaccination from './pages/Vaccination';
import Sleeping from './pages/Sleeping';
import Child from './pages/Child';
import HelpLine from './pages/HelpLine';
import Location from './pages/Location'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/vaccination" element={<Vaccination />} />
        <Route path="/location" element={<Location />} />
        <Route path="/child" element={<Child />} />
        <Route path="/sleeping" element={<Sleeping />} />
        <Route path="/helpline" element={<HelpLine />} />
      </Routes>
    </Router>
  );
};

export default App;
