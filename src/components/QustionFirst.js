import React from "react";

function QustionFirst({ qustion }) {
  return (
    <div className="containe m-2">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-1 check p0 m0">
              <input type="checkBox" />
            </div>
            <div className="col-8 mainQustion">
              <p>{qustion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QustionFirst;
