import React from "react";
import Header from "./components/Header";
import Intro from "./components/sections/Intro";
import Features from "./components/sections/Features";
import Advice from "./components/sections/Advice";
import About from "./components/sections/About";
import Clients from "./components/sections/Clients";
import Newsletter from "./components/sections/Newsletter";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Features />
      <Advice />
      <About />
      <Clients />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
