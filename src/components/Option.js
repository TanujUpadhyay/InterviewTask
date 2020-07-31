import React from "react";
import SelectionTagOptions from "./SelectionTagOptions";
import {
  classOptions,
  subjectOptions,
  topicOptions,
  complexityOptions,
} from "../util/String";
import Buttons from "./Buttons";

function Option() {
  return (
    <div className="containe optionWrapper">
      <div className="col">
        <div className="row ">
          <SelectionTagOptions name="Class" options={classOptions} />
          <SelectionTagOptions name="Subject" options={subjectOptions} />
          <SelectionTagOptions name="Topic" options={topicOptions} />
          <SelectionTagOptions name="Complixity" options={complexityOptions} />
          <div>
            <div className="col">
              <Buttons
                name="Search"
                typeOfButton="submit"
                styleClass="bttonStyle"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Option;
