import React, { FunctionComponent } from "react";

const Filters: FunctionComponent = () => {
  return (
    <div className="containe optionWrapper">
      <h3>Filters</h3>
      <div className="col">
        <div className="boxes">
          <p>Class</p>
          <select>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <p>TOPICS</p>
        <div className="filterWrapper">
          <div className="ansbox">
            <input type="checkbox" className="m-2" />
            Knowing our
          </div>

          <div className="ansbox">
            <input type="checkbox" className="m-2" />
            Numbers Whole
          </div>

          <div className="ansbox">
            <input type="checkbox" className="m-2" />
            Numbers Playing
          </div>

          <div className="ansbox">
            <input type="checkbox" className="m-2" />
            with Numbers
          </div>

          <div className="ansbox">
            <input type="checkbox" className="m-2" />
            Ideas
          </div>

          <div className="ansbox">
            <input type="checkbox" className="m-2" />
            Understanding
          </div>

          <div className="ansbox">
            <input type="checkbox" className="m-2" />
            Elementaryl
          </div>

          <div className="ansbox">
            <input type="checkbox" className="m-2" />
            Handlingl
          </div>

          <div className="ansbox">
            <input type="checkbox" className="m-2" />
            Algebra
          </div>

          <div className="ansbox">
            <input type="checkbox" className="m-2" />
            Fractionsl
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
