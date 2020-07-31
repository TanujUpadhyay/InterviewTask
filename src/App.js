import React from "react";
import "./App.css";
import Header from "./components/Header";
import Option from "./components/Option";
import QustionAswns from "./components/QustionAswns";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Option />
      <QustionAswns />
      <Footer />
    </div>
  );
}

export default App;
