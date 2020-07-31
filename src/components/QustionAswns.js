import React from "react";
import QustionFirst from "./QustionFirst";
import AnsCheckBox from "./AnsCheckBox";
import {
  Q1option1,
  Q1option2,
  Q1option3,
  Q1option4,
  qustion1,
  Q2option1,
} from "../util/String";
import MarksFilde from "./MarksFilde";

function QustionAswns() {
  return (
    <div className="containe qustionAswnsWrapper ">
      <div className="row ">
        <div className="col">
          <QustionFirst qustion={qustion1} />
        </div>
      </div>
      <div className="row ">
        <AnsCheckBox string={Q1option1} />
        <AnsCheckBox string={Q1option2} />
        <AnsCheckBox string={Q1option3} />
        <AnsCheckBox string={Q1option4} />
      </div>

      <div className="row">
        <div className="col"></div>
        <div>
          <MarksFilde />
        </div>
      </div>

      <div className="row ">
        <div className="col">
          <QustionFirst qustion={qustion1} />
        </div>
      </div>
      <div className="row ">
        <AnsCheckBox string={Q1option1} />
        <AnsCheckBox string={Q1option2} />
        <AnsCheckBox string={Q1option3} />
        <AnsCheckBox string={Q1option4} />
      </div>

      <div className="row">
        <div className="col"></div>
        <div>
          <MarksFilde />
        </div>
      </div>

      <div className="row ">
        <div className="col">
          <QustionFirst qustion={qustion1} />
        </div>
      </div>
      <div className="row ">
        <AnsCheckBox string={Q1option1} />
        <AnsCheckBox string={Q1option2} />
        <AnsCheckBox string={Q1option3} />
        <AnsCheckBox string={Q1option4} />
      </div>

      <div className="row">
        <div className="col"></div>
        <div>
          <MarksFilde />
        </div>
      </div>
    </div>
  );
}

export default QustionAswns;
