import React from "react";
import Header from "./components/Header";
import Intro from "./components/sections/Intro";
import Features from "./components/sections/Features";
import Advice from "./components/sections/Advice";
import About from "./components/sections/About";
import Clients from './components/sections/Clients'

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Features />
      <Advice />
      <About />
      <Clients/>
    </div>
  );
}

export default App;
