import React from 'react'
import './App.css';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import QuienSoy from './components/quienSoy/QuienSoy';
import Servicios from './components/servicios/Servicios';
import Testimonios from './components/testimonios/Testimonios';

function App() {
  return (
    <div>
      <Navbar />
      <QuienSoy />
      <Servicios />
      <Testimonios />
      <Contact />
    </div>
  );
}

export default App;
