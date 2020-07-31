import React from "react";

function Buttons({ name, styleClass, typeOfButton }) {
  return <input className={styleClass} type={typeOfButton} value={name} />;
}

export default Buttons;
