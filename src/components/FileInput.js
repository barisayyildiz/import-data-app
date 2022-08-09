import React from "react";

import CloudIcon from "../assets/svg/IconCloud.jsx";

function FileInput({ onFileUpload }) {
  return (
    <div
      style={{ width: "100%", backgroundColor: "rgba(243, 243, 254, 0.3)" }}
      className="border border-dashed radius border-navy-75 py-5 px-8"
    >
      {/* <form ref={formRef} onSubmit={handleSubmit}> */}
      <input
        type="file"
        id="file"
        multiple={false}
        onChange={onFileUpload}
        hidden
      ></input>
      <label htmlFor="file">
        <div className="flex flex-col items-center gap-4 cursor-pointer">
          <CloudIcon />
          <div className="flex flex-col items-center gap-2">
            <p className="font-medium text-uppercase color-navy-700">
              Upload Your File
            </p>
            <p className="text-sm color-navy-300">
              <span className="underline" style={{ color: "#4277FF" }}>
                Choose a file
              </span>{" "}
              to import your data. All .csv or .xls types are supported.
            </p>
          </div>
        </div>
      </label>
    </div>
  );
}

export default FileInput;
