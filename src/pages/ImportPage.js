import React from "react";
import { homePageTexts } from "../constants";
import FormPicker from "../components/FormPicker";
import FileInput from "../components/FileInput";

function ImportPage() {
  const {
    header,
    subHeader,
    buttonText,
    usage: { header: usageHeader, steps },
  } = homePageTexts;
  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold color-navy-700 font-circular">
          {header}
        </h1>
        <div className="flex flex-col items-center gap-10">
          <h3 className="text-xl color-navy-300">{subHeader}</h3>
        </div>
      </div>
      <FormPicker />
      <FileInput header={"Choose a file from your device"} />
    </div>
  );
}

export default ImportPage;
