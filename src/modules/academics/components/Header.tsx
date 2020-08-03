import React from "react";

function Header() {
  return (
    <div className="containe headerWrapper">
      <div className="row">
        <div className="col-5">
          <h3>Create Assessment</h3>
        </div>
        <div className="col-7 sideItems">
          <p>
            Total Marks : <span className="tmarks">50</span>
          </p>

          <p>
            Selection :{" "}
            <span className="selectionWrapper">
              <span className="slection">20</span> out of 25
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
