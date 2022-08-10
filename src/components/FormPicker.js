import React from "react";
import { useSelector } from "react-redux";
import { selectForm } from "../store/slices/formSlice";

import IconLink from "../assets/svg/IconLink";
import IconForm from "../assets/svg/IconForm";

function FormPicker() {
  const selectedForm = {
    name: "Event Registration",
    submission: 196,
    updated: "20 May 2021",
  };

  const state = useSelector(selectForm);
  // console.log(selectedFormId);
  console.log(state);

  return (
    <div className="bg-white border radius border-navy-100 flex justify-between px-4 py-2 cursor-pointer">
      <div className="flex items-center gap-5">
        <IconForm />
        <div className="flex flex-col gap-1.5">
          <div className="flex gap-1.5">
            <p className="font-medium color-navy-700">{selectedForm.name}</p>
            <IconLink />
          </div>
          <p className="color-navy-300 text-sm">
            {selectedForm.submission} submissions. Updated on{" "}
            {selectedForm.updated}
          </p>
        </div>
      </div>
      <button className="bg-blue-400 radius color-white px-4 py-3">
        Change Form
      </button>
    </div>
  );
}

export default FormPicker;
