import React from "react";

function SelectionTagOptions({ name, options }) {
  return (
    <div className="col boxes">
      <p>{name}</p>
      <select>
        {options.map((item, i) => (
          <option key={i}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectionTagOptions;
