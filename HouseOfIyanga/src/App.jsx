import React from "react";
import _Footer from "./components/sections/_Footer";
import _Header from "./components/sections/_Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

function App() {
  return (
    <main>
      {/** <Home /> */}
      <_Header />
      <About/>
      <_Footer />
      {/**   */}
      
    </main>
  );
}

export default App;
