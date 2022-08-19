import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectForm } from "../store/slices/formSlice";
import { toggleModal } from "../store/slices/modalSlice";

import ContentLoader, { Facebook } from "react-content-loader";

import { formatDate } from "../utils";

import IconLink from "../assets/svg/IconLink";
import IconForm from "../assets/svg/IconForm";

import { getFormInfo } from "../utils/api";

function FormPicker() {
  const { selectedFormId } = useSelector(selectForm);
  const [form, setForm] = useState(false);

  useEffect(() => {
    getFormInfo(selectedFormId).then(({ data: { content } }) => {
      setForm({ ...content, date: formatDate(content.updated_at) });
    });
  }, []);

  const dispatch = useDispatch();

  if (!form) {
    return (
      <div data-testid="form_picker_skeleton">
        <ContentLoader
          speed={1}
          width={1200}
          height={54}
          viewBox="0 0 1200 54"
          backgroundColor="#E3E5F5"
          foregroundColor="#B6B8D3"
          style={{ width: "100%" }}
          speed={2}
        >
          <rect x="0" y="0" rx="10" ry="10" width="40" height="54" />
          <rect x="58" y="4" rx="7" ry="7" width="30%" height="17" />
          <rect x="58" y="34" rx="7" ry="7" width="40%" height="17" />
          <rect x="1035" y="0" rx="7" ry="7" width="160" height="54" />
        </ContentLoader>
      </div>
    );
  }

  return (
    <div className="bg-white border radius border-navy-100 flex justify-between px-4 py-3 cursor-pointer">
      <div className="flex items-center gap-5">
        <IconForm />
        <div className="flex flex-col">
          <div className="flex gap-1.5">
            <p className="font-semibold color-navy-700">{form.title}</p>
            <a href={form.url} target="_blank">
              <IconLink />
            </a>
          </div>
          <p className="color-navy-300 text-sm">
            {form.count} submissions. Updated on {form.date}
          </p>
        </div>
      </div>
      <button
        onClick={() => dispatch(toggleModal())}
        className="bg-blue-400 font-medium radius color-white px-4 py-3"
      >
        Change Form
      </button>
    </div>
  );
}

export default FormPicker;
