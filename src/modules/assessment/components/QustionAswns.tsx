import React from "react";
import MarksField from "./MarksField";
import {
  qustion1,
  Q1option1,
  Q1option2,
  Q1option3,
  Q1option4,
  Q2option1,
} from "../util/String";

function QustionAswns() {
  return (
    <div className="containe qustionAswnsWrapper ">
      <div className="qnaBox">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-1 check ansbox p0 m0">
                <input type="checkBox" />
              </div>
              <div className="col-9 mainQustion">
                <p>{qustion1}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row qnAns">
          <div className="col-2">
            <div className="ansbox">
              <input type="checkbox" className="m-2" />
              {Q1option1}
            </div>
          </div>
          <div className="col-2">
            <div className="ansbox">
              <input type="checkbox" className="m-2" />
              {Q1option2}
            </div>
          </div>
          <div className="col-2">
            <div className="ansbox">
              <input type="checkbox" className="m-2" />
              {Q1option3}
            </div>
          </div>
          <div className="col-2">
            <div className="ansbox">
              <input type="checkbox" className="m-2" />
              {Q1option4}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col"></div>
          <div>
            <MarksField />
          </div>
        </div>
      </div>

      <div className="qnaBox">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-1 check ansbox p0 m0">
                <input type="checkBox" />
              </div>
              <div className="col-9 mainQustion">
                <p>{qustion1}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row qnAns">
          <div className="col-2">
            <div className="ansbox">
              <input type="checkbox" className="m-2" />
              {Q2option1}
            </div>
          </div>
          <div className="col-2">
            <div className="ansbox">
              <input type="checkbox" className="m-2" />
              {Q2option1}
            </div>
          </div>
          <div className="col-2">
            <div className="ansbox">
              <input type="checkbox" className="m-2" />
              {Q2option1}
            </div>
          </div>
          <div className="col-2">
            <div className="ansbox">
              <input type="checkbox" className="m-2" />
              {Q2option1}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col"></div>
          <div>
            <MarksField />
          </div>
        </div>
      </div>

      <div className="qnaBox">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-1 check ansbox p0 m0">
                <input type="checkBox" />
              </div>
              <div className="col-9 mainQustion">
                <p>{qustion1}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row qnAns">
          <div className="col-2">
            <div className="ansbox">
              <input type="checkbox" className="m-2" />
              {Q1option1}
            </div>
          </div>
          <div className="col-2">
            <div className="ansbox">
              <input type="checkbox" className="m-2" />
              {Q1option2}
            </div>
          </div>
          <div className="col-2">
            <div className="ansbox">
              <input type="checkbox" className="m-2" />
              {Q1option3}
            </div>
          </div>
          <div className="col-2">
            <div className="ansbox">
              <input type="checkbox" className="m-2" />
              {Q1option4}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col"></div>
          <div>
            <MarksField />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QustionAswns;
