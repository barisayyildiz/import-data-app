import { useState } from "react";
import "../styles/FormSelector.scss";
import FormsList from "./FormsList";

import Modal from "./Modal";
import Divider from "./Divider";

import CloseIcon from "../assets/svg/IconClose";

function FormSelector() {
  const mockForms = [
    {
      id: "#1",
      name: "Mood Survey",
      submission: 196,
      updated: "20 May 2021",
    },
    {
      id: "#2",
      name: "Workshop Registration",
      submission: 196,
      updated: "20 May 2021",
    },
    {
      id: "#3",
      name: "Team",
      submission: 196,
      updated: "20 May 2021",
    },
    {
      id: "#4",
      name: "Event Registration",
      submission: 196,
      updated: "20 May 2021",
    },
    {
      id: "#5",
      name: "Book Club Registration",
      submission: 196,
      updated: "20 May 2021",
    },
  ];

  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(!isOpen)}>
      <div className="flex flex-col gap-4 modal-content-wrapper">
        <div
          className="flex flex-row justify-start gap-4 border-b"
          style={{ borderColor: "#DCE2F0", borderBottomWidth: "2px" }}
        >
          <div className="grow-1 flex flex-col gap-1.5">
            <h1 className="font-medium text-xl">Select Forms</h1>
            <h3 style={{ color: "#60658C" }}>
              Please select one of your forms to continue
            </h3>
          </div>
          <div>
            {/* TODO: clickable yapılacak */}
            <CloseIcon />
          </div>
        </div>
        <div className="modal-content">
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <input
              style={{ backgroundColor: "#F3F3FE" }}
              className="nosubmit color-navy-300 radius bg-navy-25 w-full"
              placeholder="Search in forms"
            ></input>
            <FormsList
              selected={selected}
              setSelected={setSelected}
              forms={mockForms}
            />
          </div>
        </div>
        <div
          className="flex flex-row justify-between items-center"
          style={{
            backgroundColor: "#FAFAFC",
            borderColor: "#DCE2F0",
            borderTopWidth: "2px",
          }}
        >
          <a
            style={{
              backgroundColor: "#FAFAFC",
              border: "1px solid #ADB4D2",
              color: "#A0A6C3",
            }}
            className="radius py-3 px-8"
          >
            CANCEL
          </a>
          <a
            style={{
              backgroundColor: "#78BB07",
              color: "#ffffff",
            }}
            className="radius py-3 px-8"
          >
            DONE
          </a>
        </div>
      </div>
    </Modal>
  );
}

export default FormSelector;
