import React from "react";
import Header from "./components/Header";
import Intro from "./components/sections/Intro";
import Features from "./components/sections/Features";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Features
        featuresIntro={[
          {
            title: "Every Client Matters",
            text:
              "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics ",
          },
        ]}
      />
    </div>
  );
}

export default App;
