import React from "react";
import _Footer from "./components/sections/_Footer";
import _Header from "./components/sections/_Header";
import Home from "./components/pages/Home";
import AppointmentPage from "./components/pages/AppointmentPage";

function App() {
  return (
    <main>
      <_Header />
      {/** <Home /> */}
        <AppointmentPage/>
      <_Footer />
    </main>
  );
}

export default App;
