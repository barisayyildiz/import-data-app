import React from "react";

import CheckIcon from "../assets/svg/IconCheck";
import TableIcon from "../assets/svg/IconTable";

function SuccessPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-20">
      <CheckIcon />
      <div className="flex flex-col items-center gap-11">
        <div className="flex flex-col items-center gap-4">
          <h1
            style={{ fontSize: "44px" }}
            className="font-bold color-navy-700 flex items-center text-center"
          >
            Imported Successfully!
          </h1>
          <h3 className="text-2xl color-navy-300">
            If you have submissions data in a Microsoft Excel or CSV file, you
            can now import that data into your forms.
          </h3>
        </div>
        <div className="flex flex-row justify-center items-center gap-5">
          <a
            href="/import"
            style={{ backgroundColor: "#78BB07" }}
            className="color-white py-3 px-8 radius flex flex-row gap-2.5 font-medium text-xl"
          >
            Import More Data
          </a>
          <a
            target="_blank"
            href="https://www.jotform.com/tables/"
            className="border-2 radius border-blue-400 py-3 px-8 color-blue-400 font-medium
						flex gap-2.5 flex-row justify-center items-center text-xl"
          >
            <TableIcon />
            <span>Go to Jotform Tables</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
