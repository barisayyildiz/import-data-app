import React, { useState, useEffect, useRef } from "react";

import ArrowIcon from "../assets/svg/IconArrow";

function Input({ value, disabled }) {
  return (
    <input
      style={{ width: "100%", borderColor: "#D7DAE9" }}
      type="text"
      value={value}
      disabled={true}
      className="flex flex-row items-center 
			bg-white cursor-pointer gap-3 border radius
			pt-3 pr-2 pb-3 pl-4"
    ></input>
  );
}

export default Input;
