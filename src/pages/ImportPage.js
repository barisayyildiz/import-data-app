import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectForm } from "../store/slices/formSlice";
import { homePageTexts } from "../constants";
import FormPicker from "../components/FormPicker";
import FileInput from "../components/FileInput";
import FilePreview from "../components/FilePreview";

import MatchingForm from "../components/MatchingForm";

import { uploadFile, getFormQuestions, matchFileForm } from "../utils/api";

function ImportPage() {
  const [file, setFile] = useState(null);
  const [importedColumns, setImportedColumns] = useState(null);
  const [formQuestions, setFormQuestions] = useState(null);

  const { selectedFormId } = useSelector(selectForm);

  if (!selectedFormId) {
    window.location = "/";
  }

  const { header, subHeader } = homePageTexts;

  const onFileUpload = async (uploadedFile) => {
    setFile(uploadedFile);

    console.log("on file upload");

    let questions = [];
    try {
      let {
        data: { content: formContent },
      } = await getFormQuestions(selectedFormId);
      setFormQuestions(formContent);
    } catch (error) {
      console.log(error);
    }

    console.log("onfile upload 2");

    try {
      const data = new FormData();
      data.append("file", uploadedFile);
      let {
        data: { content: fileContent },
      } = await uploadFile(data);
      setImportedColumns(fileContent);
    } catch (error) {
      console.log(error);
    }

    console.log("onfile upload 3");
  };

  const removeFile = () => {
    setFile(null);
    setImportedColumns(null);
    setFormQuestions(null);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("file", file);
    formData.append("formID", selectedFormId);

    const data = {};
    e.target.querySelectorAll("select").forEach((select) => {
      if (select.value) {
        data[select.name] = select.value;
      }
    });

    formData.append("data", JSON.stringify(data));

    // TODO: formData sunucuya yollanacak
    try {
      const res = await matchFileForm(formData);
      if (res.status === 200) {
        window.location = "/success";
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      style={{ width: "70rem" }}
      className="mt-8 mx-auto flex flex-col justify-center gap-8"
    >
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-4xl font-bold color-navy-700 font-circular">
          {header}
        </h1>
        <h3 className="text-xl color-navy-300">{subHeader}</h3>
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
          <h3 className="text-lg font-medium color-navy-700">
            Choose a file from your device
          </h3>
          {file === null ? (
            <FileInput data-testid="file_input" onFileUpload={onFileUpload} />
          ) : (
            <FilePreview
              name={file.name}
              size={file.size}
              onRemove={removeFile}
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          {/* DROPDOWNS */}
          {importedColumns && (
            <MatchingForm
              onSubmit={onSubmit}
              importedColumns={importedColumns}
              formQuestions={formQuestions}
            />
          )}
          {/* BUTTONS */}
          <div className="flex flex-row justify-between">
            <button
              style={{ backgroundColor: "#DDDFE9" }}
              className="py-3 px-4 color-navy-700 font-medium radius"
              onClick={() => {
                if (file) {
                  removeFile();
                } else {
                  window.location = "/";
                }
              }}
            >
              Back
            </button>
            <button
              disabled={!file ? true : false}
              style={{ backgroundColor: "#78BB07" }}
              className={`py-3 px-4 color-white font-medium radius ${
                !file && "opacity-50 cursor-not-allowed"
              }`}
              type="submit"
              id="form1"
              onClick={() => {
                document.getElementById("formsubmit").click();
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImportPage;
