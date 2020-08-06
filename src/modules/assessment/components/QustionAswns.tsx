import React, { useState, useEffect } from "react";

import { getQustions } from "../helper/api";
import { QustionBody } from "../contracts/qustions_interface";

function MarksField() {
  return (
    <div className="container maksWrapper">
      <div className="row">
        <div className="col-2 m-3 sideIcons1">
          <h5>Marks</h5>
        </div>

        <div className="col-4  sideIcons2 boxes">
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

function QustionAswns() {
  const [data, setData] = useState<QustionBody[]>([]);
  const [userSelectedQustions, setUserSelectedQustions] = useState([]);

  useEffect(() => {
    getqustion();
  }, []);

  const getqustion = async () => {
    const respone = await getQustions(
      9650234321,
      "CBSE",
      "Class V",
      "Mathematics"
    );
    setData(respone);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    if (e.target.checked === true) {
      setUserSelectedQustions({ ...userSelectedQustions, [name]: value });
    } else {
      console.log(e.target.checked);
    }
    console.log(userSelectedQustions);
  };

  return (
    <div className="containe qustionAswnsWrapper ">
      {data.map((qans, index) => {
        return (
          <div className="qnaBox" key={index}>
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-1 check ansbox p0 m0">
                    <input
                      type="checkbox"
                      onChange={onChange}
                      name="questionDescription"
                      value={qans.questionDescription}
                    />
                  </div>
                  <div className="col-9 mainQustion">
                    <p>
                      {++index} {qans.questionDescription}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row qnAns">
              <div className="col-2">
                <div className="ansbox">
                  <input
                    type="checkbox"
                    onChange={onChange}
                    value={qans.option1}
                    name="option1"
                    className="m-2"
                  />
                  {qans.option1}
                </div>
              </div>
              <div className="col-2">
                <div className="ansbox">
                  <input
                    type="checkbox"
                    onChange={onChange}
                    value={qans.option2}
                    name="option2"
                    className="m-2"
                  />
                  {qans.option2}
                </div>
              </div>
              <div className="col-2">
                <div className="ansbox">
                  <input
                    type="checkbox"
                    onChange={onChange}
                    value={qans.option3}
                    name="option3"
                    className="m-2"
                  />
                  {qans.option3}
                </div>
              </div>
              <div className="col-2">
                <div className="ansbox">
                  <input
                    type="checkbox"
                    onChange={onChange}
                    value={qans.option4}
                    name="option4"
                    className="m-2"
                  />
                  {qans.option4}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col"></div>
              <div>{MarksField()}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default QustionAswns;
