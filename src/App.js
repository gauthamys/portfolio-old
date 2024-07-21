import Navbar from './components/Navbar';
import Main from './components/Main';
import Home from './components/Home';
import Cloud from './components/Clouds';
import React from "react";

function App() {
  return (
    <div className='App flex flex-row'>
      <Cloud direction={true}/>
      <Cloud direction={false}/>
      <Navbar />
      <Main Component={Home}/>
    </div>
  );
}

export default App;
