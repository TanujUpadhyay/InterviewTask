import React, { FunctionComponent, useState } from "react";
import { addAssessment } from "../helper/api";

const AssessmentForm: FunctionComponent = () => {
  const [course, setCourse] = useState("");
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [marks, setMarks] = useState<number>();
  const [instructions, setInstructions] = useState("");

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // for checking the request i try t put data dirctly
    const assessment = {
      boardname: "CBSE",
      classname: "Class V",
      subjectname: "Maths",
      assessmentname: "Assess5",
      questions: [
        {
          questionDescription: "Hello2",
          option1: "option1",
          option2: "option2",
          option3: "option3",
          option4: "option4",
          answer: "a",
          answerDescription: "Here is the solution of this question",
          marks: 5,
          imageLinks: "hello.png",
        },
        {
          questionDescription: "Hello3",
          option1: "20",
          option2: "30",
          option3: "40",
          option4: "50",
          answer: "a",
          answerDescription: "This is the solution",
          marks: 2,
          imageLinks: "hello.png",
        },
      ],
    };

    const saveAssement = async () => {
      console.log(assessment);
      const response = await addAssessment(assessment);

      console.log(response.data);
    };

    saveAssement();

    setCourse("");
    setDuration("");
    setName("");
    setInstructions("");
    setMarks(0);
  };

  const clearForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCourse("");
    setDuration("");
    setName("");
    setInstructions("");
    setMarks(0);
  };

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

      <form onSubmit={onFormSubmit}>
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
              <p>Course</p>
            </div>
            <div className="col-6 inputFildes">
              <div className="inputHolders">
                <span>Course</span>
                <select
                  value={course}
                  onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
                    setCourse(e.target.value as string)
                  }
                >
                  <option value="">Select</option>
                  <option value="CBSE, Class V, Maths">
                    CBSE, Class V, Maths
                  </option>
                  <option value="CBSE, Class V, English">
                    CBSE, Class V, English
                  </option>
                  <option value="CBSE, Class V, Hindi">
                    CBSE, Class V, Hindi
                  </option>
                </select>
              </div>
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
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
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
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
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
                <select
                  value={marks}
                  onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
                    setMarks(e.target.value as number)
                  }
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">40</option>
                  <option value="40">50</option>
                  <option value="50">60</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-1"></div>
            <div className="col-2">
              <p>Instructions</p>
            </div>
            <div className="col-6 inputFildes">
              <div className="inputHolders">
                <span>with Select</span>
                <h6>1. Don't quit in the middle</h6>
                <h6>2. Negative marks (available)</h6>
                <h6>3. each Questions carries 2 marks</h6>
                <input
                  type="text"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row footerStyle">
          <div className="col-7"></div>
          <div className="footerbtns">
            <button
              className="cancleButtonStyle"
              onClick={clearForm}
              value="Clear"
            >
              Clear
            </button>
            <input className="bttonStyle" type="submit" value="Create" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AssessmentForm;
