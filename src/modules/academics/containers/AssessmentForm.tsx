import React from "react";

function AssessmentForm() {
  return (
    <div className="container fromWrapper">
      <div className="row borderBottom">
        <div className="col-3"></div>
        <div className="col">
          <div className="formHeading">
            <h3>
              <i className="far fa-clipboard"></i> Create Assessment
            </h3>
          </div>
        </div>
      </div>

      <div className="mainForm">
        <div className="row">
          <div className="col-3"></div>
          <div className="col">
            <h5>Primary Details</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-2">
            <p>Name</p>
          </div>
          <div className="col-6 inputFildes">
            <div className="inputHolders">
              <span>Enter Name</span>
              <input type="text" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col-2">
            <p>Duration</p>
          </div>
          <div className="col-6 inputFildes">
            <div className="inputHolders">
              <span>Enter Duration(Max)</span>
              <input type="text" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col-2">
            <p>Marks</p>
          </div>
          <div className="col-6 inputFildes">
            <div className="inputHolders">
              <span>Enter Name</span>
              <select>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
                <option>50</option>
                <option>60</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col-2">
            <p>Classess</p>
          </div>
          <div className="col-6 inputFildes">
            <div className="inputHolders">
              <span>with Select</span>
              <h6>1. Don't quit in the middle</h6>
              <h6>2. Negative marks (available)</h6>
              <h6>3. each Questions carries 2 marks</h6>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>

      <div className="row footerStyle">
        <div className="col-7"></div>
        <div className="footerbtns">
          <input className="cancleButtonStyle" type="submit" value="Clear" />
          <input className="bttonStyle" type="submit" value="Create" />
        </div>
      </div>
    </div>
  );
}

export default AssessmentForm;
