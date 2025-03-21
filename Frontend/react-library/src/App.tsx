import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { Homepage } from "./layouts/Homepage/Homepage";

function App() {
  return (
    <div>
      <Navbar />
      <Homepage/>
      <Footer />
    </div>
  );
}

export default App;
