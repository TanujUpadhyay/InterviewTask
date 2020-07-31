import React from "react";

function AnsCheckBox({ string }) {
  return (
    <div className="col-2 ansbox">
      <input type="checkBox" className="m-2" />
      {string}
    </div>
  );
}

export default AnsCheckBox;
