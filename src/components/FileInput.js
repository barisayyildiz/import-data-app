import React, { useState } from "react";

import CloudIcon from "../assets/svg/IconCloud.jsx";

function FileInput({ onFileUpload, ...props }) {
  const [over, setOver] = useState(false);
  return (
    <div
      style={{ width: "100%", backgroundColor: "rgba(243, 243, 254, 0.3)" }}
      className="border border-dashed radius border-navy-75 p-11"
      onDrop={(e) => {
        e.preventDefault();
        e.persist();
        onFileUpload(e.dataTransfer.files[0]);
        setOver(false);
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setOver(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        setOver(false);
      }}
    >
      <input
        {...props}
        data-testid="file_input"
        type="file"
        id="file"
        multiple={false}
        onChange={({
          target: {
            files: [uploadedFile],
          },
        }) => onFileUpload(uploadedFile)}
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
