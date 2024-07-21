import Navbar from './components/Navbar';
import Main from './components/Main';
import Home from './components/Home';
import Cloud from './components/Clouds';
import React from "react";

function App() {
  function genRandomPosition() {
    let dir = ['left', 'right'];
    let pos = ['24', '28', '32', '64', '68']
  }
  return (
    <div className='App flex flex-row'>
      <Cloud topClass={"top-2"} animate={"animate-cloud_1"}/>
      <Cloud topClass={"top-8"} animate={"animate-cloud_2"}/>
      <Cloud topClass={"top-16"} animate={"animate-cloud_3"}/>
      <Cloud topClass={"top-24"} animate={"animate-cloud_4"}/>
      <Cloud topClass={"top-32"} animate={"animate-cloud_5"}/>
      <Navbar />
      <Main Component={Home}/>
    </div>
  );
}

export default App;
