import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectForm } from "../store/slices/formSlice";
import { toggleModal } from "../store/slices/modalSlice";

import { formatDate } from "../utils";

import IconLink from "../assets/svg/IconLink";
import IconForm from "../assets/svg/IconForm";

function FormPicker() {
  const { allForms, selectedFormId } = useSelector(selectForm);
  const { title, count, updated_at, url } = allForms.find(
    (form) => form.id === selectedFormId
  );

  const date = formatDate(updated_at);
  const dispath = useDispatch();

  return (
    <div className="bg-white border radius border-navy-100 flex justify-between px-4 py-3 cursor-pointer">
      <div className="flex items-center gap-5">
        <IconForm />
        <div className="flex flex-col">
          <div className="flex gap-1.5">
            <p className="font-semibold color-navy-700">{title}</p>
            <a href={url} target="_blank">
              <IconLink />
            </a>
          </div>
          <p className="color-navy-300 text-sm">
            {count} submissions. Updated on {date}
          </p>
        </div>
      </div>
      <button
        onClick={() => dispath(toggleModal())}
        className="bg-blue-400 font-medium radius color-white px-4 py-3"
      >
        Change Form
      </button>
    </div>
  );
}

export default FormPicker;
