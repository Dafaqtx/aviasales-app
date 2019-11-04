import React from "react";

import "./style.scss";

const Checkbox = ({ label, id }) => {
  return (
    <div className="Checkbox">
      <input
        className="Checkbox__input"
        type="checkbox"
        id={`checkbox__${id}`}
      />
      <label className="Checkbox__label" htmlFor={`checkbox__${id}`}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
