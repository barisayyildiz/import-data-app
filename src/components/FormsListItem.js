import React from "react";

import IconForm from "../assets/svg/IconForm";

function FormsListItem({ form: { name, submission, updated } }) {
  return (
    <div className="bg-white border radius border-navy-100 flex justify-between py-4 px-5 cursor-pointer">
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
