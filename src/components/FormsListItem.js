import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectForm,
  setSelectedForm,
  setAllForms,
} from "../store/slices/formSlice";

import IconForm from "../assets/svg/IconForm";

function FormsListItem({
  form: { name, submission, updated, id },
  selected,
  setSelected,
}) {
  const dispatch = useDispatch();
  const { selectedForm } = useSelector(selectForm);

  const isSelected = selected === id;
  // const isSelected = selectedForm === id;

  const style = {
    backgroundColor: `${isSelected ? "#DBF1FF" : "#ffffff"}`,
    borderWidth: "1px",
    borderRadius: "4px",
    borderColor: `${isSelected ? "#0099FF" : "#C8CEED"}`,
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
    padding: "16px 20px",
  };
  return (
    <div
      style={style}
      className="unselectable"
      // onClick={() => dispatch(setSelectedForm(id))}
      onClick={() => setSelected(id)}
    >
      <div className="flex items-center gap-4">
        <IconForm />
        <div className="flex flex-col">
          <div className="flex gap-1.5">
            <p className="font-medium color-navy-700">{name}</p>
          </div>
          <p className="color-navy-300 text-sm">
            {submission} submissions. Updated on {updated}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormsListItem;
