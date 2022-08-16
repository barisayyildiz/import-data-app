import React from "react";
import "../styles/Dropdown.scss";

function Dropdown({ options, name, style, match }) {
  return (
    <select style={{ ...style }} className="pt-4 pr-2 pb-4 pl-4" name={name}>
      {!match ? (
        <option hidden disabled selected></option>
      ) : (
        <option selected value={match}>
          {match}
        </option>
      )}
      {options.map((item, key) => {
        return <option value={item}>{item}</option>;
      })}
    </select>
  );
}

export default Dropdown;
