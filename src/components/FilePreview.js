import React from "react";

import FileIcon from "../assets/svg/IconFile.jsx";
import DeleteIcon from "../assets/svg/IconDelete.jsx";

import { sizeFormatter } from "../utils";

function FilePreview({ name = "NameName.xls", size = 216, onRemove }) {
  return (
    <div
      data-testid="file_preview"
      className="
				flex flex-row items-center p-4 g-4 
				border radius bg-navy-25 mx-auto my-0 border-navy-100"
      style={{
        width: "100%",
      }}
    >
      <div className="file_icon order-first grow-0">{<FileIcon />}</div>
      <div className="details flex flex-col order-first grow-1 gap-1.5 px-3">
        <p className="color-navy-700 font-medium line-height-md">{name}</p>
        <p className="color-navy-300 line-height-sm">{sizeFormatter(size)}</p>
      </div>
      <div
        className="outline-button order-last 
				grow-0 flex gap-1 p-2.5 bg-white border-gray-75 border radius cursor-pointer"
        onClick={onRemove}
        data-testid="file_preview_delete"
      >
        <DeleteIcon />
      </div>
    </div>
  );
}

export default FilePreview;
