import React from "react";

function MarksFilde() {
  return (
    <div className="container maksWrapper">
      <div className="row">
        <div className="col-2 m-3 sideIcons1">
          <h5>Marks</h5>
        </div>

        <div className="col-3  sideIcons2 boxes">
          <p>Enter marks</p>
          <select>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
            <option>05</option>
          </select>
        </div>

        <div className="col-2  sideIcons3">
          <i className="fas fa-pen"></i>
        </div>

        <div className="col-2  sideIcons4">
          <i className="fas fa-trash"></i>
        </div>
      </div>
    </div>
  );
}

export default MarksFilde;
