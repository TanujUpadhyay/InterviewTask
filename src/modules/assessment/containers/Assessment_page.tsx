import React, { FunctionComponent } from "react";
import Footer from "../components/Footer";
import QustionAswns from "../components/QustionAswns";
import Header from "../components/Header";
import Filters from "../components/Filters";
import "../util/style.css";

const Assessment_page: FunctionComponent = () => {
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
};

export default Assessment_page;
