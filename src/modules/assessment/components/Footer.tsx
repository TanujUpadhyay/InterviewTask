import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="footerbtns">
            <input className="cancleButtonStyle" type="submit" value="Clear" />
          </div>
          <div className="footerbtns">
            <input
              className="previewButtonStyle"
              type="submit"
              value="Preview"
            />
          </div>
          <div className="footerbtns">
            <input className="bttonStyle" type="submit" value="submit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
