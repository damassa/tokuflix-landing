import React from "react";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
