import "../styles/FormSelector.scss";
import FormsList from "./FormsList";

function FormSelector() {
  const mockForms = [
    {
      name: "Mood Survey",
      submission: 196,
      updated: "20 May 2021",
    },
    {
      name: "Workshop Registration",
      submission: 196,
      updated: "20 May 2021",
    },
    {
      name: "Team",
      submission: 196,
      updated: "20 May 2021",
    },
    {
      name: "Event Registration",
      submission: 196,
      updated: "20 May 2021",
    },
    {
      name: "Book Club Registration",
      submission: 196,
      updated: "20 May 2021",
    },
  ];
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
      <FormsList forms={mockForms} />
    </div>
  );
}

export default FormSelector;
