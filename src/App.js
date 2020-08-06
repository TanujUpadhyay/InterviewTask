import React from "react";

import {
  AssessmentElements,
  AssessmentForm,
} from "./modules/assessment/containers";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={AssessmentForm} />
      <Route exact path="/qustions" component={AssessmentElements} />
    </Router>
  );
}

export default App;
