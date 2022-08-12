import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectForm } from "../store/slices/formSlice";

import { formatDate } from "../utils";

import IconForm from "../assets/svg/IconForm";

function FormsListItem({
  form: { title, count, updated_at, id },
  selected,
  setSelected,
}) {
  const date = formatDate(updated_at);

  const isSelected = selected === id;

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
    <div style={style} className="unselectable" onClick={() => setSelected(id)}>
      <div className="flex items-center gap-4">
        <IconForm />
        <div className="flex flex-col">
          <div className="flex gap-1.5">
            <p className="font-medium color-navy-700">{title}</p>
          </div>
          <p className="color-navy-300 text-sm">
            {count} submissions. Updated on {date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormsListItem;
