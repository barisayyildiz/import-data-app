import React, { useState, useEffect, useRef } from "react";

function Label({ value }) {
  return (
    <label
      style={{ borderColor: "#D7DAE9" }}
      type="text"
      className="flex flex-row items-center 
			bg-white cursor-pointer gap-3 border radius
			pt-4 pr-2 pb-4 pl-4 w-full"
    >
      {value}
    </label>
  );
}

export default Label;
