import React from 'react';
import Landing from './Components/Landing';
import Instagram from './Components/Instagram';
import Flavors from './Components/Flavors';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Instagram />
      <Flavors />
      <Pricing />
      <Contact />

    </div>
  );
}

export default App;
