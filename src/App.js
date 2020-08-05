import React from "react";

import {
  AssessmentElements,
  AssessmentForm,
} from "./modules/assessment/containers";

function App() {
  return (
    <div className="App">
      <AssessmentForm />
      <AssessmentElements />
    </div>
  );
}

export default App;
