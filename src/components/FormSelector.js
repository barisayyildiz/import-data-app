import { useState } from "react";
import "../styles/FormSelector.scss";
import FormsList from "./FormsList";

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
  return (
    <div
      style={{
        margin: "100px auto",
      }}
      className="w-120 flex flex-col justify-center items-center gap-4"
    >
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
  );
}

export default FormSelector;
