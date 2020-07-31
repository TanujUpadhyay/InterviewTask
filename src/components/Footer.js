import React from "react";
import Buttons from "./Buttons";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="footerbtns">
            <Buttons
              name="Clear"
              typeOfButton="submit"
              styleClass="cancleButtonStyle"
            />
          </div>
          <div className="footerbtns">
            <Buttons
              name="Preview"
              typeOfButton="submit"
              styleClass="previewButtonStyle"
            />
          </div>
          <div className="footerbtns">
            <Buttons
              name="Submit"
              typeOfButton="submit"
              styleClass="bttonStyle"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
