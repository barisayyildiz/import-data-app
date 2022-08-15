import React, { useState } from "react";
import { useSelector } from "react-redux";

import { selectForm } from "../store/slices/formSlice";

import { homePageTexts } from "../constants";
import FormPicker from "../components/FormPicker";
import FileInput from "../components/FileInput";
import FilePreview from "../components/FilePreview";
import Label from "../components/Label";
import Dropdown from "../components/Dropdown";

import MatchingForm from "../components/MatchingForm";

import { uploadFile } from "../utils/api";

function ImportPage() {
  const [file, setFile] = useState(null);
  const [importedColumns, setImportedColumns] = useState([]);
  const [errors, setErrors] = useState([]);

  const { selectedFormId } = useSelector(selectForm);

  if (!selectedFormId) {
    window.location = "/";
  }

  // TODO: form questions, formu seçtikten sonra redux'a kaydedilecek...
  const formQuestions = ["Name", "Adress", "Work"];

  const { header, subHeader } = homePageTexts;

  const onFileUpload = (e) => {
    const [uploadedFile] = e.target.files;
    setFile(uploadedFile);

    // uploadFile(uploadedFile).then((res) => {
    //   console.log(res);
    // });

    // TODO: dosya sunucuya yollanacak
    setTimeout(() => {
      setImportedColumns([
        {
          value: "#1",
          label: "name",
        },
        {
          value: "#2",
          label: "Your Adress",
        },
        {
          value: "#3",
          label: "Work",
        },
      ]);
    }, 1000);
  };

  const removeFile = () => {
    setErrors([]);
    setFile(null);
    setImportedColumns([]);
  };

  const isValidForm = (form) => {
    let tempErrors = [];
    formQuestions.forEach((label) => {
      if (!form[label].value) {
        tempErrors.push(label);
      }
    });
    setErrors(tempErrors);
    if (tempErrors.length > 0) {
      return false;
    }
    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!isValidForm(e.target)) {
      return;
    }

    let formData = new FormData();
    formData.append("file", file);

    formQuestions.forEach((label) => {
      console.log(
        e.target[label],
        e.target[label].value,
        e.target[label].value === ""
      );
      formData.append(label, e.target[label].value);
    });

    for (const value of formData.values()) {
      console.log(value);
    }

    // TODO: formData sunucuya yollanacak
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
        <h3 className="text-md color-navy-300">{subHeader}</h3>
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
        <div className="flex flex-col gap-8">
          {/* DROPDOWNS */}
          {importedColumns.length > 0 && (
            <MatchingForm
              onSubmit={onSubmit}
              importedColumns={importedColumns}
              formQuestions={formQuestions}
              errors={errors}
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
