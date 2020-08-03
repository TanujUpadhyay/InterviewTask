import React from "react";
import "./App.css";

import Footer from "./modules/academics/components/Footer";
import Header from "./modules/academics/components/Header";
import Filters from "./modules/academics/containers/Filters";
import QustionAswns from "./modules/academics/containers/QustionAswns";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Filters />
          </div>
          <div className="col-9">
            <QustionAswns />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
