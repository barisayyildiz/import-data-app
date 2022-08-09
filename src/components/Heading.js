import React from "react";

import JotformIcon from "../assets/svg/IconJotformText.jsx";

function Heading() {
  return (
    <div className="flex flex-row justify-start items-center py-4 px-8 gap-50">
      <JotformIcon />
      <h1 className="color-navy-700 font-medium text-xl border-l border-navy-100 mx-2.5 px-2.5">
        Import Data
      </h1>
    </div>
  );
}

export default Heading;
