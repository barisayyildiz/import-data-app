import React from "react";
import "../styles/Dropdown.scss";

function Dropdown({ options, id, style }) {
  return (
    <select
      style={{ ...style }}
      className="pt-4 pr-2 pb-4 pl-4"
      name={id}
      id={id}
    >
      <option hidden disabled selected></option>
      {options.map((item, key) => {
        return <option value={item.value}>{item.label}</option>;
      })}
    </select>
  );
}

export default Dropdown;
