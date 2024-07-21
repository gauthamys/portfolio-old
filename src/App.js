import Navbar from './components/Navbar';
import Main from './components/Main';
import Home from './components/Home';
import Cloud from './components/Clouds';
import React from "react";

function App() {
  return (
    <div className='App flex flex-row'>
      <Cloud direction={true} topClass={"top-0"} rightClass={"right-24"}/>
      <Cloud direction={false} topClass={"top-6"} rightClass={"right-48"}/>
      <Cloud direction={false} topClass={"top-8"} rightClass={"right-48"}/>
      <Cloud direction={false} topClass={"top-24"} rightClass={"right-48"}/>
      <Cloud direction={true} topClass={"top-32"} rightClass={"right-64"}/>
      <Navbar />
      <Main Component={Home}/>
    </div>
  );
}

export default App;
