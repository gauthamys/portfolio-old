import Navbar from './components/Navbar';
import Main from './components/Main';
import React from "react";
import Cloud from './components/Clouds';
import Sun from './components/Sun';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App flex flex-row'>
      <Navbar />
      <Main />
      <Footer />
    </div>
    
  );
}

export default App;
