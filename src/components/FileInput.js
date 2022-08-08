import React, { useState } from "react";

import CloudIcon from "../assets/svg/IconCloud.jsx";

function FileInput(props) {
  const { header } = props;

  const [file, setFile] = useState(null);

  const onFileUpload = (e) => {
    e.preventDefault();
    const [uploaded] = e.target.files;
    setFile(file);
  };

  return (
    <div style={{ margin: "20px auto" }} className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-medium">{header}</h3>
        <div
          className="flex flex-col py-5 px-8 justify-center items-center border border-dashed border-navy-75 cursor-pointer"
          style={{ backgroundColor: "rgba(243, 243, 254, 0.3)" }}
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
            <div className="flex flex-col items-center py-5 px-8 gap-4 cursor-pointer">
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
          {/* </form> */}
        </div>
      </div>
      <div>
        <button>BACK</button>
        <button>Continue</button>
      </div>
    </div>
  );
}

export default FileInput;
