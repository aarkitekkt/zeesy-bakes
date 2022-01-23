import React from 'react';
import Modal from './Components/Modal';
import Landing from './Components/Landing';
import Instagram from './Components/Instagram';
import Flavors from './Components/Flavors';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import About from './Components/About';
import './App.css';

function App() {
  return (
    <div className="App">

      <Modal />
      <Navbar
        logoBtn="landing"
        galleryBtn="instagram"
        aboutBtn="about"
        flavorsBtn="flavors"
        pricingBtn="pricing"
        contactBtn="contact"
      />
      <Landing />
      <Instagram />
      <About />
      <Flavors />
      <Pricing />
      <Contact />

    </div>
  );
}

export default App;
