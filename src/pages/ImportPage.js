import React, { useState } from "react";
import { homePageTexts } from "../constants";
import FormPicker from "../components/FormPicker";
import FileInput from "../components/FileInput";
import FilePreview from "../components/FilePreview";

function ImportPage() {
  const [file, setFile] = useState(null);
  const [importedColumns, setImportedColumns] = useState([]);
  // TODO: form questions, formu seçtikten sonra redux'a kaydedilecek...

  const { header, subHeader } = homePageTexts;

  const onFileUpload = (e) => {
    console.log("hello world");
    const [uploadedFile] = e.target.files;
    console.log(uploadedFile);
    setFile(uploadedFile);

    // TODO: dosya sunucuya yollanacak

    // sunucuyu taklit ediyor
    setTimeout(() => {
      setImportedColumns(["name", "your adress", "work"]);
    }, 1000);
  };

  const removeFile = () => {
    console.log("file removed...");
    setFile(null);
  };

  return (
    <div style={{ width: "70rem", margin: "0px auto" }}>
      <div
        style={{ width: "100%" }}
        className="flex flex-col items-center gap-4"
      >
        <h1 className="text-4xl font-bold color-navy-700 font-circular">
          {header}
        </h1>
        <div className="flex flex-col items-center gap-10">
          <h3 className="text-xl color-navy-300">{subHeader}</h3>
        </div>
      </div>
      <FormPicker />
      <div
        style={{ margin: "20px auto", width: "100%" }}
        className="flex flex-col gap-8"
      >
        <div
          className="flex flex-col gap-4 items-start"
          style={{ margin: "0px auto", width: "100%" }}
        >
          <h3 className="text-lg font-medium">
            Choose a file from your device
          </h3>
          {file === null ? (
            <FileInput onFileUpload={onFileUpload} />
          ) : (
            <FilePreview
              name={file.name}
              size={file.size}
              onRemove={removeFile}
            />
          )}
        </div>
        <div className="flex flex-row justify-between">
          <button
            style={{ backgroundColor: "#DDDFE9" }}
            className="py-3 px-4 color-navy-700 font-medium radius"
          >
            Back
          </button>
          <button
            disabled={!file ? true : false}
            style={{ backgroundColor: "#78BB07" }}
            className={`py-3 px-4 color-white font-medium radius ${
              !file && "opacity-50"
            }`}
          >
            Continue
          </button>
        </div>
        {/* TODO: Dropdown'lar eklenecek */}
      </div>
    </div>
  );
}

export default ImportPage;
