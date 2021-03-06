import React, { FunctionComponent, useState } from "react";
import { addAssessment } from "../helper/api";
import PersonWithBook from "../../../assets/svgs/person-with-book.svg";
import { Link, Redirect } from "react-router-dom";
import Assessment_page from "./Assessment_page";

const AssessmentForm: FunctionComponent = () => {
  const [course, setCourse] = useState("");
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [marks, setMarks] = useState<number>();
  const [instructions, setInstructions] = useState("");

  const assessmentData = {
    boardname: course,
    classname: course,
    subjectname: course,
    assessmentname: name,
  };

  // const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   // for checking the request i try t put data dirctly
  //   // only for tesing perpose for api
  //   const assessment = {
  //     boardname: "CBSE",
  //     classname: "Class V",
  //     subjectname: "Maths",
  //     assessmentname: "Assess4",
  //     questions: [
  //       {
  //         questionDescription: "Hello2",
  //         option1: "option1",
  //         option2: "option2",
  //         option3: "option3",
  //         option4: "option4",
  //         answer: "a",
  //         answerDescription: "Here is the solution of this question",
  //         marks: 5,
  //         imageLinks: "hello.png",
  //       },
  //       {
  //         questionDescription: "Hello3",
  //         option1: "20",
  //         option2: "30",
  //         option3: "40",
  //         option4: "50",
  //         answer: "a",
  //         answerDescription: "This is the solution",
  //         marks: 2,
  //         imageLinks: "hello.png",
  //       },
  //     ],
  //   };

  //   const saveAssement = async () => {
  //     console.log(assessment);
  //     const response = await addAssessment(assessment);

  //     console.log(response.data);
  //   };

  //   saveAssement();

  //   setCourse("");
  //   setDuration("");
  //   setName("");
  //   setInstructions("");
  //   setMarks(0);
  // };

  const clearForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCourse("");
    setDuration("");
    setName("");
    setInstructions("");
    setMarks(0);
  };

  // const onClickCheck = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();

  //   if (name && course && duration && marks && instructions) {
  //     console.log("Works fine");

  //     setCourse("");
  //     setDuration("");
  //     setName("");
  //     setInstructions("");
  //     setMarks(0);
  //   } else {
  //     console.log("missing");
  //   }
  // };

  return (
    <div className="container fromWrapper">
      <div className="row borderBottom">
        <div className="col-3"></div>
        <div className="col">
          <div className="formHeading">
            <h3>
              <img src={PersonWithBook} alt="Person with Book" />
              Create Assessment
            </h3>
          </div>
        </div>
      </div>

      <form>
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
                  required
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
                  required
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
                  required
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
                  required
                  value={marks}
                  onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
                    setMarks(e.target.value as number)
                  }
                >
                  <option value="">Select</option>
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
                <textarea
                  required
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
            <Link
              to={{
                pathname: "/qustions",
                state: assessmentData,
              }}
            >
              <button className="bttonStyle" type="submit">
                Create
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AssessmentForm;
