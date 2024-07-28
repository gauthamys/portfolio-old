import Navbar from './components/Navbar';
import Main from './components/Main';
import React from "react";
import Cloud from './components/Clouds';
import Sun from './components/Sun';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App flex flex-row'>
      <Cloud topClass={"top-[-1rem]"} animate={"animate-cloud_1"}/>
      <Cloud topClass={"top-[0.5rem]"} animate={"animate-cloud_2"}/>
      <Cloud topClass={"top-[1.5rem]"} animate={"animate-cloud_3"}/>
      <Cloud topClass={"top-[3rem]"} animate={"animate-cloud_4"}/>
      <Cloud topClass={"top-[4.5rem]"} animate={"animate-cloud_5"}/>
      <Navbar />
      <Main />
      {/* <Footer /> */}
      <div className='footer h-16 w-screen'></div>
    </div>
    
  );
}

export default App;
